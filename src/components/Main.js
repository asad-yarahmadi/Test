import React from 'react';
import Text from './Text';
import SimpleSelector from './SimpleSelector';
import NextPageButton from './NextPageButton';
import { fetchData } from '../services/api';
import PersonalInfo from './PersonalInfo';
import HouseHoldInfo from './HouseHoldInfo';
import MovingInfo from './Movement';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      selectedEmail: '',
      selectedId: '',
      selectedIndex: -1,
    };
    this.onSelectEmail = this.onSelectEmail.bind(this);
    this.onNextPageButtonClicked = this.onNextPageButtonClicked.bind(this);
  }

  componentDidMount() {
    fetchData().then((data) => {
      this.setState({
        data,
      });
    });
  }

  onNextPageButtonClicked() {
    if (this.state.page === 6) {
      this.setState({
        page: 1,
      });
    } else {
      this.setState({
        page: this.state.page + 1,
      });
    }
  }

  onSelectEmail(selectedItem) {
    console.log('selectedItem', selectedItem);
    const { data } = this.state;
    let id = '';
    let index = -1;
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === selectedItem) {
        id = data[i].id;
        index = i;
      }
    }
    this.setState({
      selectedEmail: selectedItem,
      selectedId: id,
      selectedIndex: index,
    });
  }

  render() {
    const { data, page, selectedIndex, selectedId } = this.state;
    const items = [];
    for (let i = 0; i < data.length; i++) {
      items.push({
        label: data[i].email,
        value: data[i].email,
      });
    }
    return (
      <div>
        {page === 1 ? <Text title='Welcome' /> : ''}
        {page === 2 ? (
          <SimpleSelector
            label='Enter you email address'
            items={items}
            onChange={this.onSelectEmail}
          />
        ) : (
          ''
        )}
        {page === 3 ? <PersonalInfo id={selectedId} /> : ''}
        {page === 4 ? <HouseHoldInfo id={selectedId} /> : ''}
        {page === 5 ? <MovingInfo id={selectedId} /> : ''}
        {page === 6 ? <div>Completed</div> : ''}
        <NextPageButton onClick={this.onNextPageButtonClicked} />
      </div>
    );
  }
}

export default Main;
