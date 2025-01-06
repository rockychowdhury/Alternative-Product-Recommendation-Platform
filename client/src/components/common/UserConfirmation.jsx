
import PropTypes from 'prop-types';
import Modal from './Modal';
const UserConfirmation = ({children}) => {
    return (
        <div>
            <Modal>
                <div>{children}</div>
            </Modal>
        </div>
    );
};
UserConfirmation.propTypes ={
    children:PropTypes.any,
}
export default UserConfirmation;