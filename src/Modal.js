import './styles/modal.scss'
import CloseIcon from '@material-ui/icons/Close';

const Modal = ({modalVisible, closeModal}) => {

    // 모달 안의 내용 리셋
    const reset = () => {
        const inputs = document.getElementsByClassName("inputs");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = null;
        }
    }

    const show = modalVisible ? (
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-header">
                    <span>이벤트 등록</span>
                    <CloseIcon 
                        className="close-button"
                        onClick={closeModal}
                    />
                </div>

                <div className="modal-contents">
                    <table>
                        <tbody>
                            <tr>
                                <td>이벤트명</td>
                                <td>
                                    <input className="inputs" />
                                </td>
                                <td>회사</td>
                                <td><input className="inputs" /></td>
                            </tr>
                            <tr>
                                <td>주소</td>
                                <td colSpan="3"><input className="inputs" /></td>
                            </tr>
                            <tr>
                                <td>담당자</td>
                                <td><input className="inputs" /></td>
                                <td>직위</td>
                                <td><input className="inputs" /></td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td colSpan="3"><input className="inputs" /></td>
                            </tr>
                            <tr>
                                <td>연락처</td>
                                <td colSpan="3"><input className="inputs" /></td>
                            </tr>
                            <tr>
                                <td>Summary</td>
                                <td colSpan="3"><input className="inputs" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="modal-footer">
                    <button>SAVE</button>
                    <button onClick={() => { reset() }}>DELETE</button>
                </div>
            </div>
        </div>
    ) : null;

    return (
        show
    )

}

export default Modal;