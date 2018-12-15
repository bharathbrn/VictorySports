import React from 'react'
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";

export default class FamilyDetails extends React.Component {

  constructor(props) {
    super(props)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  state = { activeItem: 'Add New User' };


  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleUserRoleChange = (event, props) => {
    this.setState({user_role: props.value})
  };

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    const {name, username, password, retype_password, user_role} = this.state;

    return <React.Fragment>

      <Form>
        <Grid doubling >
          <Grid.Row>
            <Grid.Column textAlign={'left'} mobile={6}>
              <label className={'Admin-Form-Label'}>Father's Name </label>
            </Grid.Column>
            <Grid.Column mobile={10}>
              <Form.Field>
                <Form.Input name={'name'} value={name} fluid placeholder="Father's Name" onChange={this.handleChange}/>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column textAlign={'left'} mobile={6}>
              <label className={'Admin-Form-Label'}>Father's Occupation </label>
            </Grid.Column>
            <Grid.Column mobile={10}>
              <Form.Field>
                <Form.Input name={'username'} value={username} fluid placeholder="Father's Occupation " onChange={this.handleChange}/>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={6} textAlign={'left'}>
              <label className={'Admin-Form-Label'}>Father's Income </label>
            </Grid.Column>
            <Grid.Column mobile={10}>
              <Form.Field>
                <Form.Input name={'username'} value={username} fluid placeholder="Father's Income" onChange={this.handleChange}/>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column textAlign={'left'} mobile={6}>
              <label className={'Admin-Form-Label'}>Mother's Name </label>
            </Grid.Column>
            <Grid.Column mobile={10}>
              <Form.Field>
                <Form.Input name={'name'} value={name} fluid placeholder="Mother's Name" onChange={this.handleChange}/>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column textAlign={'left'} mobile={6}>
              <label className={'Admin-Form-Label'}>Mother's Occupation </label>
            </Grid.Column>
            <Grid.Column mobile={10}>
              <Form.Field>
                <Form.Input name={'username'} value={username} fluid placeholder="Mother's Occupation " onChange={this.handleChange}/>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={6} textAlign={'left'}>
              <label className={'Admin-Form-Label'}>Mother's Income </label>
            </Grid.Column>
            <Grid.Column mobile={10}>
              <Form.Field>
                <Form.Input name={'username'} value={username} fluid placeholder="Mother's Income" onChange={this.handleChange}/>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Form>
      <br/>

    </React.Fragment>
  }

}