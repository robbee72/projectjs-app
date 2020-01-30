// Inline styling
import React from "react";

class ResumeCV extends React.Component {
  render() {
    return (
      <div className='parent'>
        <div className='column col-left'>
          <div className='content-container'>
            <div className='titleclassName'>KEITH ROBINSON</div>
            <div className='pResume'>
              Maple Grove, MN 55369 (702) 510-3268 krobnson@gmail.com
            </div>

            <div className='separResume'>
              ______________________________________________________
            </div>
            <br />
            <div className='subtitleResume'>PROFESSIONAL SUMMARY</div>

            <div className='fm-lo__subtitle'>
              Customer-oriented professional with software engineer experience
              in websites and designs , user experience, usability and speed for
              multiple types of end-users. Successful Project manager from
              design to costing to production. Experienced in providing the
              highest level of customer-service.
            </div>
            <br />
            <div className='separResume'>
              ______________________________________________________
            </div>
            <div className='subtitleResume'>SKILLS</div>
            <div>
              <div className='row'>
                <div className='col-xs-6'>
                  <div className='colResume'>
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
                  <div className='colResume'>
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
            <div className='separResume'>
              ______________________________________________________
            </div>
            <div className='subtitleResume'>WORK HISTORY</div>

            <div className='fm-lo__fm'>
              <br />
              <div className='subheadResume'>
                Software Engineer 03/2016 to 11/2019
              </div>
              <div className='lsResume'>
                (Remote Contractor) – Maple Grove, Minnesota
                <br />
                <br />
                <div className='bulletResume'>
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
              <div className='subheadResume'>
                Golf Professional 04/2005 to 12/2017
              </div>
              <div className='lsResume'>
                Wynn Las Vegas – Las Vegas, Nevada
                <br />
                <br />
                <div className='bulletResume'>
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
              <div className='subheadResume'>
                Professional Golf Caddie 09/2002 to 03/2005
              </div>
              <div className='lsResume'>
                Cascata Golf Club ( Caesars Entertainment) – Boulder City,
                Nevada
                <br />
                <br />
                <div className='bulletResume'>
                  • Established and maintained productive working relationships
                  with staff and guests.
                  <p />• Assisted guests with course management and logistics.
                  <p />• Was available as needed.
                </div>
              </div>
              <br />
              <div className='subheadResume'>
                Project Manager 09/2001 to 09/2002
              </div>
              <div className='lsResume'>
                Top Tool Company – Minneapolis, MN
                <br />
                <br />
                <div className='bulletResume'>
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
            <div className='column col-left'>
              <div className='content-container'>
                <div className='separResume'>
                  ______________________________________________________
                </div>
                <div className='subtitleResume'>EDUCATION</div>
                <div className='fm-lo__fm'>
                  Certification : Full Stack Software Developer
                  <div className='subheadResume'>Bloc.io</div>
                  <div className='bulletResume'>
                    - San Francisco, CA Bootcamp coursework in HTML, CSS and
                    JavaScript • JavaScript, Ruby on Rails and Angular projects
                  </div>
                  <div className='subheadResume'>
                    Business Administration University of Minnesota
                  </div>
                  <div className='bulletResume'>
                    – Twin Cities – Minneapolis, MN
                  </div>
                </div>
              </div>
            </div>

            <div className='separResume'>
              ______________________________________________________
            </div>
            <div className='subtitleResume'>INTERESTS</div>
            <div className='fm-lo__fm'>
              <div className='bulletResume'>
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
