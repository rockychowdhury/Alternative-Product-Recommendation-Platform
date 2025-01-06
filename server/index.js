require('dotenv').config()
const cors = require('cors');
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();


const port = process.env.PORT || 5000;

app.use(cors({
    origin: ['https://altrec-68fe1.web.app', 'http://localhost:5173'],
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());


const verifyToken = (req, res, next) => {
    const token = req?.cookies?.token;
    if (!token) {
        return res.status(401).send({ message: 'unauthorized access' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'unauthorized access' });
        }
        req.user = decoded;
    })
    next();
}



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zvja1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // await client.connect();
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const database = client.db('AltRec');
        const queryCollection = database.collection('queries');
        const userCollection = database.collection('users');
        const recommendationCollection = database.collection('recommendation');


        app.post('/jwt', (req, res) => {
            const user = req.body;
            //jwt.sign(data,secret,{expireIn:'5h'})
            const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '5h' });
            // console.log(token);
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'none',
                // process.env.NODE_ENV === 'production'
            }).send({ success: true });
        })

        app.post('/logout', (req, res) => {
            res.clearCookie('token', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'none',
            })
                .send({ logout: "success" })
        })

        //Query APIs
        app.get('/queries', async (req, res) => {
            try {
                const search = req.query.search;
                const limit = req.query.limit;
                if (search) {
                    queries = await queryCollection.find({ productName: search }).toArray();
                    res.status(200).send(queries);
                }
                else if (limit) {
                    const queries = await queryCollection
                        .find()
                        .sort({ createdAt: -1 })
                        .limit(6)
                        .toArray();
                    res.status(200).send(queries);

                }
                else {
                    const queries = await queryCollection.find().toArray();
                    res.status(200).send(queries);
                }
            } catch (error) {
                res.status(500).send({ message: "Error to get Queries" });
            }
        })
        app.get('/my-queries', verifyToken, async (req, res) => {
            // console.log(req.cookies?.token);
            // console.log(req.user);
            const email = req?.user?.email;
            try {
                if (email) {
                    const queries = await queryCollection
                        .find({ "user.email": email })
                        .sort({ createdAt: -1 })
                        .toArray();
                    res.status(200).send(queries);
                } else {
                    res.status(400).send({ message: "User email not found" });
                }
            } catch (error) {
                res.status(500).send({ message: "Error to get Queries", error: error.message });
            }
        });

        app.post('/queries', async (req, res) => {
            try {
                const newQuery = req.body;
                const result = await queryCollection.insertOne(newQuery);
                res.status(201).send({ message: result });
            } catch (error) {
                res.status(500).send({ message: "Error to post the Query" });
            }
        })
        app.get('/queries/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = await queryCollection.findOne({ _id: new ObjectId(id) });
                if (query) res.send(query);
                else res.status(400).send({ message: "Invalid query ID" });
            } catch (error) {
                res.status(404).send({ message: "query not found", error });
            }
        })

        app.put("/queries/:id", async (req, res) => {
            // console.log("here");
            try {
                const id = req.params.id;
                const updatedQuery = req.body;
                // console.log(updatedQuery);
                const result = await queryCollection.updateOne(
                    { _id: new ObjectId(id) },
                    { $set: updatedQuery }
                );
                // console.log(result);
                res.send(result);
            } catch (error) {
                res.status(500).send({ message: "Error to update query", error });
            }
        })
        app.delete('/queries/:id', verifyToken, async (req, res) => {
            try {
                const id = req.params.id;
                const result = await queryCollection.deleteOne({ _id: new ObjectId(id) });
                res.send(result);
            } catch (error) {
                res.status(500).send({ message: "Error to delete Query ", error });
            }
        });

        // recommendations api's

        app.post('/recommendations', async (req, res) => {
            try {
                const newRecommendation = req.body;
                if (!newRecommendation.query || !newRecommendation.query._id) {
                    return res.status(400).json({ message: "Query ID is required" });
                }
                const queryId = newRecommendation.query._id;
                const result = await recommendationCollection.insertOne(newRecommendation);
                const updateResult = await queryCollection.updateOne({ _id: new ObjectId(queryId) }, { $inc: { recommendationCount: 1 } })
                // console.log(updateResult);
                res.status(201).send({ message: result });
            } catch (error) {
                res.status(500).send({ message: "Error to post the Recommendation" });
            }
        })

        app.get('/recommendations/:id', async (req, res) => {
            try {
                const id = req.params.id;
                // console.log(id);
                const recommendations = await recommendationCollection.find({ "query._id": id }).toArray();
                res.status(200).send(recommendations);
            } catch (error) {
                res.status(500).send({ message: "Error to get recommendations" });
            }
        })

        app.get('/my-recommendations', verifyToken, async (req, res) => {
            // console.log(req.cookies?.token);
            // console.log(req.user);
            const email = req?.user?.email;
            try {
                if (email) {
                    const recommendations = await recommendationCollection
                        .find({ "user.email": email })
                        .sort({ createdAt: -1 })
                        .toArray();
                    res.status(200).send(recommendations);
                } else {
                    res.status(400).send({ message: "User email not found" });
                }
            } catch (error) {
                res.status(500).send({ message: "Error to get recommendations", error: error.message });
            }
        });
        app.get('/recommendations-for-me', verifyToken, async (req, res) => {
            // console.log(req.cookies?.token);
            // console.log(req.user);
            const email = req?.user?.email;
            try {
                if (email) {
                    const recommendations = await recommendationCollection
                        .find({ "query.user.email": email })
                        .sort({ createdAt: -1 })
                        .toArray();
                    res.status(200).send(recommendations);
                } else {
                    res.status(400).send({ message: "User email not found" });
                }
            } catch (error) {
                res.status(500).send({ message: "Error to get recommendations", error: error.message });
            }
        });
        app.delete('/recommendations/:id', verifyToken, async (req, res) => {
            try {
                const id = req.params.id;
                const recommendation = await recommendationCollection.findOne({ _id: new ObjectId(id) });
                const result = await recommendationCollection.deleteOne({ _id: new ObjectId(id) });
                const qID = recommendation?.query?._id;
                const updateResult = await queryCollection.updateOne({ _id: new ObjectId(qID) }, { $inc: { recommendationCount: -1 } })
                // console.log(updateResult,recommendation,qID);
                res.send(result);
            } catch (error) {
                res.status(500).send({ message: "Error to delete recommendation ", error });
            }
        });



    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send(`Server is running on the PORT: ${port}`)
})
app.listen(port, () => {
    console.log(`Server is running on the PORT: ${port}`)
})