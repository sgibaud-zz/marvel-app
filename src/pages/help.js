import React from 'react';

// import CSS
import '../css/style.css';

function Help() {
    return (
        <div className='container'>
            <h2>Centre d'aide</h2>
            <div className='row'>
                <div data='data' options='options' widget='widget' server='server' sn-atf-area='Vous avez une question sur les héros Marvel ?'>
                    <form submit='submit' role='form'></form>
                    <input type="hidden" name="id" value="search" autocomplete="off"></input>
                    <input type="hidden" name="t" value="csp_kb" autocomplete="off"></input>

                </div>

            </div>
        </div>
    );
}

export default Help;