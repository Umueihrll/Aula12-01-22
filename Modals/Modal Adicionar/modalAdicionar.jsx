import btnClose from '../../../assets/btnClose.svg'
import './style.css'
import InputMask from 'react-input-mask'

function ModalAdicionar(props) {
    return (
        <div className="backdrop">
            <div className="card">
                <img src={btnClose} alt="Botão fechar" className='btnClose'/>
                <span>Novo Contato</span>
                <div className="input">
                    <input type="text" placeholder='Nome' />
                    <input type="text" placeholder='E-mail'/>
                    <InputMask mask="(99) 99999-9999" placeholder='Telefone'/>
                </div>
                <div className="btns">
                    <button className='adicionar'>Adicionar</button>
                    <button className='limpar'>Limpar</button>
                </div>
                
            </div>
        </div>
    )
}
export default ModalAdicionar;