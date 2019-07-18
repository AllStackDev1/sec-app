import React, { Component } from 'react';
import { Separator } from 'Components/CustomBootstrap';
import 'progress-tracker/src/styles/progress-tracker.scss';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    document.title = 'SEC NIGERIA | Dashboard';
    document.body.classList.remove('background');
  }

  render() {
    return this.props.loading ? (
      <div className="loading" />
    ) : (
      <div className="dashboard-layout">
        <aside>
          <div className="navigation">
            <ul className="progress-tracker progress-tracker--vertical">
              <li className="progress-step is-complete">
                <div className="progress-marker" />
                <div className="progress-text">
                  <h4 className="progress-title">Business Information</h4>
                </div>
              </li>

              <li className="progress-step is-active">
                <div className="progress-marker" />
                <div className="progress-text">
                  <h4 className="progress-title">Management Team</h4>
                </div>
              </li>

              <li className="progress-step">
                <div className="progress-marker" />
                <div className="progress-text">
                  <h4 className="progress-title">Business Innovation</h4>
                </div>
              </li>

              <li className="progress-step">
                <div className="progress-marker" />
                <div className="progress-text">
                  <h4 className="progress-title">Business Risk</h4>
                </div>
              </li>

              <li className="progress-step">
                <div className="progress-marker" />
                <div className="progress-text">
                  <h4 className="progress-title">Regulatory</h4>
                </div>
              </li>

              <li className="progress-step">
                <div className="progress-marker" />
                <div className="progress-text">
                  <h4 className="progress-title">Business Strategy & Exit</h4>
                </div>
              </li>
            </ul>
          </div>
        </aside>
        <main className="form-section">
          <section>
            <h1>Let's Get To Know Your Business</h1>
            <div className="form-content">
              <h6>COMPANY INFORMATION</h6>
              <Separator className="clearfix w-100 pb-3" />
            </div>
          </section>
        </main>
        <aside>
          <div className="summary">SUMMARY</div>
        </aside>
      </div>
    );
  }
}

// const mapStateToProps = ({}) => {
//   const { loading, error } = dashboardReducers;
//   return { loading, error };
// };

export default Dashboard;
// connect(
//   mapStateToProps,
//   {}
// )(Dashboard);
