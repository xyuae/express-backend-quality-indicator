import React, { Component } from 'react';


export class ProjectResume extends Component {
	decimalToPercent(number){
    return Math.floor(number * 100) + '%';
  }
	render() {
		let categories = ['Specification', 'Architecture & Global Design', 'Detailed design', 'Code', 'Integration test', 'Pre-varification test', 'Safety', 'Cyber Security', 'Quality', 'Requirement organization', 'Developement organization', 'Configuration management', 'Design test strategy'];
		let data = [this.];
		return(
			<div>
				<table>
					<thead>
						<tr>
							<th>Techical Mastery Status</th>
							<th>Safety Status</th>
							<th>Cyber Security Status</th>
							<th>Development management mastery status</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>
								{this.decimalToPercent(this.props.technical_mastery_status.score)}
							</td>
							<td>
								{this.decimalToPercent(this.props.safety_status.score)}
							</td>
							<td>
								{this.decimalToPercent(this.props.cyber_status.score)}
							</td>
							<td>
								{this.decimalToPercent(this.props.development_mastery_status.score)}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}