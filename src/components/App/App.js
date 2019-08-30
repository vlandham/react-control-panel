import React, { Component } from 'react';
import { addUrlProps } from 'react-url-query';

import Controls from '../Controls/Controls';
import SidebarPage from '../SidebarPage/SidebarPage';

import { filterData } from '../../utils/filters';

import { urlPropsQueryConfig, urlPropDefaults } from './urlProps';
import dataDefs from './dataDefs.json';
import controlsConfig from './controlsConfig.json';

import data from './data.json';

class App extends Component {
  static defaultProps = {
    ...urlPropDefaults,
  };

  renderSidebar() {
    const { filters, onChangeFilters, colorBy, onChangeColorBy } = this.props;
    return (
      <Controls
        data={data}
        dataDefs={dataDefs}
        controlsConfig={controlsConfig}
        colorBy={colorBy}
        onChangeColorBy={onChangeColorBy}
        filters={filters}
        onChangeFilters={onChangeFilters}
      >
        <h2>Control Panel</h2>
      </Controls>
    );
  }

  renderData() {
    const { filters } = this.props;

    const filteredData = filterData(data, filters);
    return (
      <ul>
        {filteredData.map(d => (
          <li key={d.name}>{d.name}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <SidebarPage name="App" sidebar={this.renderSidebar()}>
        <h1>Data</h1>
        {this.renderData()}
      </SidebarPage>
    );
  }
}

export default addUrlProps({ urlPropsQueryConfig })(App);
