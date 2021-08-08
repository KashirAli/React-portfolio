import React from 'react'

export default function Card({link,serv_presence,serv_head,serv_para,cont_presence,cont_head1,cont_head2,cont_head3,cont_ans1,cont_ans2,cont_ans3}) {
    return (
         <div className="myservice_card">
             {
                 serv_presence &&   (<div><h3>{serv_head}</h3>
                 <p>{serv_para}</p>
                 <a target="_blank" href={link} className="hire">Hire me <i class="fa fa-angle-right" aria-hidden="true"></i> </a>
                 </div>)
             }
             {
                 cont_presence && (
                    <div className="cardAddress">
                    <div  className="address-row">
                      <h2>{cont_head1}</h2><p>{cont_ans1}</p>
                    </div>
                    <div className="address-row">
                      <h2>{cont_head2}</h2><p>{cont_ans2}</p>
                    </div>
                    <div className="address-row">
                      <h2>{cont_head3}</h2><p>{cont_ans3}</p>
                    </div>
                  </div>
                 )
             }
       </div>


    )
}
