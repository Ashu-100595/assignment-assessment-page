import React from 'react';
import './TopicDetail.css';

const TopicDetail = () => {
    return(
        <div className='homePage'>
            <div className='logoSection'>
                <img src='https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png' alt='skilllogo'/>
                <div>
                    <h2>Python</h2>
                    <h3>0.0%</h3>
                    <p>Avg. Score</p>
                </div>
            </div>
            <div>
            <table className='ProTable highlight'>
                 <thead>
                     <tr>
                         <th>SNo.</th>
                         <th>Content</th>
                         <th>Status</th>
                     </tr>
                 </thead>
                 <tbody>
                    <tr>
                       <td>1</td>
                       <td>Operators And Conditional Statements</td>
                       <td className='pending'>Pending</td>
                    </tr>
                    <tr>
                       <td>2</td>
                       <td>Operators And Conditional Statements</td>
                       <td className='pending'>Pending</td>
                    </tr>                   
                 </tbody>
            </table>
            </div>
        </div>
    );
}

export default TopicDetail;