import React from 'react'

export default function Specializations({ data }) {
    return (
        <div className='my-5 mx-4 d-flex flex-wrap justify-content-center gap-5'>
            {
                data.map((item, index) => (

                    <div className={`${item == 'Cyber Security' ? 'd-flex' : 'd-lg-flex d-none'} align-items-center gap-4`} style={{ width: '' }}>
                        <img src="./../../src/assets/images/asterisk.svg" alt="" />
                        <p className='m-0 fs-1 fw-bold'>{item} </p>
                        <img src="./../../src/assets/images/asterisk.svg" alt="" className={`${item == 'Cyber Security' ? 'd-block d-lg-none' : 'd-none'}`} />
                    </div>

                ))
            }
        </div>
    )
}
