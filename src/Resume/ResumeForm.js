// Inline styling

import React from "react";

const titleStyle = {
  textAlign: "center",
  fontSize: "25px",
  fontFamily: "Calibri Light",
};

const subtitleStyle = {
  color: "black",
  fontSize: "14px",
  fontFamily: "Palatino, URW Palladio L, serif",
  textAlign: "center",
  padding: "2em, 0.05em, 0, 2em",
  paddingBottom: "0.5em",
  margin: "0 0 0",
  lineHeight: "1",
};

const pStyle = {
  textAlign: "center",
  fontSize: "12px",
};

const separStyle = {
  textAlign: "center",
  fontSize: "14px",
};

const colStyle = {
  color: "black",
  fontSize: "10px",
  fontFamily: "Palatino, URW Palladio L, serif",
  textAlign: "center",
};

const subheadStyle = {
  color: "black",
  fontSize: "10px",
  fontWeight: "bold",
  fontFamily: "Palatino, URW Palladio L, serif",
  textAlign: "left",
};

const lsStyle = {
  lineHeight: ".90",
};

const bulletStyle = {
  display: "inline-block",
  paddingLeft: "15px",
};

class ResumeCV extends React.Component {
  render() {
    return (
      <div className='parent'>
        <div className='column col-left'>
          <div className='content-container__menu'>
            <div style={titleStyle}>KEITH ROBINSON</div>
            <div style={pStyle}>
              Maple Grove, MN 55369 (702) 510-3268 krobnson@gmail.com
            </div>

            <div style={separStyle}>
              ______________________________________________________
            </div>
            <br />
            <div style={subtitleStyle}>PROFESSIONAL SUMMARY</div>

            <div className='fm-lo__subtitle'>
              Customer-oriented professional with software engineer experience
              in websites and designs , user experience, usability and speed for
              multiple types of end-users. Successful Project manager from
              design to costing to production. Experienced in providing the
              highest level of customer-service.
            </div>
            <br />
            <div style={separStyle}>
              ______________________________________________________
            </div>
            <div style={subtitleStyle}>SKILLS</div>
            <div>
              <div className='row'>
                <div className='col-xs-6'>
                  <div style={colStyle}>
                    <p>
                      • Software Languages (Javascript, React, Ruby on Rails)
                    </p>
                    <p>• Project Management (estimating)</p>
                    <p>• Retail Sales and B2B sales</p>
                    <p>• Business Analysis</p>
                    <p>• Leadership and sales (Dale Carnegie)</p>

                    <p>
                      • Strong and engaging interpersonal communication skills
                    </p>
                  </div>
                </div>
                <div className='col-xs-6'>
                  <div style={colStyle}>
                    <p>• Microsoft 365 (Word, Excel, PowerPoint)</p>
                    <p>• CRM, Peoplesoft, Opera </p>
                    <p>• Adobe Creative Suite (Photoshop, Premiere) </p>
                    <p>• Photography (Canon) </p>
                    <p>•Coaching (teaching golf)</p>
                    <p>• Hardware and software installation</p>
                    <p>• Data management (Firebase, AWS, SQL)</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={separStyle}>
              ______________________________________________________
            </div>
            <div style={subtitleStyle}>WORK HISTORY</div>

            <div className='fm-lo__fm'>
              <br />
              <div style={subheadStyle}>
                Software Engineer 03/2016 to 11/2019
              </div>
              <div style={lsStyle}>
                (Remote Contractor) – Maple Grove, Minnesota
                <br />
                <br />
                <div style={bulletStyle}>
                  • Created new business for software web solutions. From single
                  page to Cloud services.
                  <p />• Used programming capabilities in JavaScript, React,
                  Ruby on Rails and other libraries as needed.
                  <p />• Developed, coded, and updated and company sites for
                  clients in Financial Service industry.
                  <p />• Created site layout and user interface using HTML and
                  CSS (SASS) practices.
                  <p />• Researched new technologies, software packages,
                  frameworks, and mobile products.
                  <p />• Collaborated with in-house web designers to create
                  sleek and innovative UI design.
                  <p />• Pitched in to assisted senior developers to meet
                  pressing deadlines during under-staffed periods in transition
                  from WordPress to React.
                </div>
              </div>
              <br />
              <div style={subheadStyle}>
                Golf Professional 04/2005 to 12/2017
              </div>
              <div style={lsStyle}>
                Wynn Las Vegas – Las Vegas, Nevada
                <br />
                <br />
                <div style={bulletStyle}>
                  • Organized daily outings and tournaments for casino and
                  corporate events at club, which led to year over year increase
                  in rounds played.
                  <p />• Developed on going relationships with guests, providing
                  course management, lessons, general information and concierge
                  services.
                  <p />• Maintained equipment, facilities and inventory to the
                  Wynn standards.
                  <p />• Evaluated staff skills and strength and assigned team
                  positions to maximize talent areas.
                  <p />• Successfully lead team through peak periods when
                  understaffed.
                  <p />• Coached C-level guests on their golf games, products,
                  and equipment, which provide information needed to make
                  appropriate purchases.
                </div>
              </div>
              <br />
              <div style={subheadStyle}>
                Professional Golf Caddie 09/2002 to 03/2005
              </div>
              <div style={lsStyle}>
                Cascata Golf Club ( Caesars Entertainment) – Boulder City,
                Nevada
                <br />
                <br />
                <div style={bulletStyle}>
                  • Established and maintained productive working relationships
                  with staff and guests.
                  <p />• Assisted guests with course management and logistics.
                  <p />• Was available as needed.
                </div>
              </div>
              <br />
              <div style={subheadStyle}>Project Manager 09/2001 to 09/2002</div>
              <div style={lsStyle}>
                Top Tool Company – Minneapolis, MN
                <br />
                <br />
                <div style={bulletStyle}>
                  • Lead sales team that lead to several new business projects.
                  <p />• Prepared and reviewed engineering drawing and
                  documentation specifications, scope of work, cost estimating,
                  and other documents.
                  <p />• Oversaw design and constructed bill of materials,
                  including scheduling flow charts.
                  <p />• Evaluated change order requests in response to revision
                  updated and cost impact studies.
                  <p />• Analyzed blueprints and delivered concise instructions
                  to technical teams to maintain quality control.
                </div>
              </div>
            </div>
            <div style={separStyle}>
              ______________________________________________________
            </div>
            <div style={subtitleStyle}>EDUCATION</div>
            <div className='fm-lo__fm'>
              Certification : Full Stack Software Developer{" "}
              <div style={subheadStyle}>Bloc.io</div>{" "}
              <div style={bulletStyle}>
                - San Francisco, CA Bootcamp coursework in HTML, CSS and
                JavaScript • JavaScript, Ruby on Rails and Angular projects
              </div>
              <div style={subheadStyle}>
                Business Administration University of Minnesota
              </div>
              <div style={bulletStyle}>– Twin Cities – Minneapolis, MN</div>
            </div>
          </div>
        </div>
        <div className='column col-left'>
          <div className='content-container__menu'>
            <div style={separStyle}>
              ______________________________________________________
            </div>
            <div style={subtitleStyle}>INTERESTS</div>
            <div className='fm-lo__fm'>
              <div style={bulletStyle}>
                Photography : Canon EOS 5D Mark IV, full line of L-lenses •
                Golf: still play to a 0 index. Fly fishing: Health and Fitness
                enthusiast. Avid reader: Try for a book a week. • Collect
                Guitars: Prize Les Paul ‘58
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeCV;
