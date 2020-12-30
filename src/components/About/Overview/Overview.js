import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const Overview = () => {
    return (
        <div className="overview about">
            <div style={{ maxWidth:"1300px", margin:"0 auto"}}> 
                <div className="row w-100 " style={{ padding: "20px 60px"}} >
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <h4 className="title"> <strong> OVERVIEW </strong>  </h4>
                        <p> <strong> <i> Who we are </i> </strong></p>
                        <p> Answar IT is a global IT and Engineering solutions provider catering to a diverse customer base. We ensure to empower our clients with innovative solutions that add measurable value to business, while adhering to global quality standards. We offer an optimal blend of business processes in varied domains to enable our customers to meet their corporate goals. Our combination of deep industry knowledge and expertise in building capabilities on short notice makes us a strategic partner for our customers.</p>
                        <p> Partnering with Answar IT gives our customers access to some of the finest talent in the industry. Our highly qualified team of professionals leverages their skills and experiences in order to design and integrate exceptionally successful products and strategies. These strategies are built with the aim to empower our customers with the right tools and processes needed to achieve operating and financial goals.</p>
                        <p> Our seasoned professionals come experienced in a broad spectrum of technologies that range from cutting-edge technologies to legacy systems, enabling us to successfully service a wide variety of customers. </p>
                        <p> Our primary goal is to facilitate the success of our customers by ensuring the delivery of highly advanced solutions that reduce project risks, enhance capabilities and create value, while managing within tight budgets and timelines. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;