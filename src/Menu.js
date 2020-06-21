// import Menu, { SubMenu, MenuItem } from 'rc-menu';
// import React from 'react';
//
// class MenuForProfessor extends React.Component {
//     render() {
//         return (
//             <Menu>
//                 <MenuItem>1</MenuItem>
//                 <SubMenu title="2">
//                     <MenuItem>2-1</MenuItem>
//                 </SubMenu>
//             </Menu>);
//     }
// }
//
//
// export default MenuForProfessor;

import React from 'react';
import ReactDOM from 'react-dom';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import './MenuForProfessor.css';
import 'rc-menu/assets/index.css';
class MenuForProfessor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subjectList: [
                {id: 10, name: 'programming'},
                {id: 100, name: 'databases'}
            ],
            groupsListPerSubject: [
                {subjectId: 0, groupList:[
                    {id: 1, name: '/4'},
                    {id: 2, name: '/5'}
                ]},
                {subjectId: 1, groupList:[
                    {id: 2, name: '/3'},
                    {id: 5, name: '/4'}
                ]}

            ]
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleDeselect = this.handleDeselect.bind(this);
        this.onClick = this.onClick.bind(this);
}


    handleSelect(info) {
        console.log('selected ', info);
        this.props.onMenuClick(info.key);
}

    handleDeselect(info) {
    console.log('deselect ', info);
}

    //should return subjectId and groupId
    onClick(subjectId, groupId) {
        //event.preventDefault();
        this.props.onMenuClick(subjectId, groupId);
    }

        render() {

                const items = [];

                for (let i = 0; i < this.state.subjectList.length; i++) {
                    let groupListForSubjectRendered = [];
                    let groupListForSubject = this.state.groupsListPerSubject.find(function(item, index, array) {return item.subjectId == i});;
                    let groupId;
                    let subjectId = this.state.subjectList[i].id;
                    for (let j = 0; j< this.state.groupsListPerSubject.length; j++) {
                        groupId = groupListForSubject.groupList[j].id;
                        groupListForSubjectRendered.push(
                            <MenuItem key={subjectId + " " + groupId + " " + groupListForSubject.groupList[j].name}>{groupListForSubject.groupList[j].name}</MenuItem>

                        );

                        //this.state.groupsListPerSubject[0].groupList[j].name
                        // <Divider>
                        // </Divider>


                    }
                    items.push(
                        <SubMenu title={this.state.subjectList[i].name} key={subjectId}>
                            {groupListForSubjectRendered}
                        </SubMenu>
                    );
                    //
                }
//onClick={this.onClick}
                return (
                    <Menu
                        multiple
                        onSelect={this.handleSelect}
                        onDeselect={this.handleDeselect}

                        className="menuForProfessor"
                    >
                        {items}
                        {/*{this.state.subjectList[]}*/}
                    </Menu>
                );
//defaultSelectedKeys={['2', '1-1']}

            //  return (
             {/*<Menu*/}
                 {/*multiple*/}
                 {/*onSelect={this.handleSelect}*/}
                 {/*onDeselect={this.handleDeselect}*/}
                 {/*defaultSelectedKeys={['2', '1-1']}*/}
                 {/*className="MenuForProfessor"*/}
             {/*>*/}

        //          <SubMenu title={this.state.subjectList[1].name} key="2">
        //              <MenuItem key="2-1">{this.state.groupsListPerSubject[1].groupList[0].name}</MenuItem>
        //              <Divider />
        //              <MenuItem key="2-2">{this.state.groupsListPerSubject[1].groupList[1].name}</MenuItem>
        //          </SubMenu>
        //      </Menu>
        //
        // );
    }
}
export default MenuForProfessor;