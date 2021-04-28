import React from "react";



class Comp2 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
     //channels: []
    };
  }

//   componentDidMount() {
//     this.props.getChannels();
//   }

//   static getDerivedStateFromProps(nextProps, state) {
//     return {
//       channels: nextProps.channels ? nextProps.channels : null
//     }
//   }

//   handleChannelSelect = (e) => {
//     this.props.setSelectedChannel(e)
//   }

//   displayChannels(){
//     const {channels} = this.state;
//     if (!channels || !channels.length) {
//       return <span>No channels available</span>;
//     }
//     else {
//       return (
//         <div data-test-id="dropdown-channels">
//         <DropdownToggle className="pr-0 mr-2" nav data-test-id="dropdown-channels-toggle">
//         <Media className="align-items-center">
//           <Media className="ml-2">
//             <span className="mb-0 text-sm font-weight-bold d-none d-sm-block">
//               {(this.props.selectedChannel.name) ? this.props.selectedChannel.name : <span>No channel selected</span>} 
//               <MdArrowDropDown size="20" />
//             </span>
//             <span className="mb-0 text-sm font-weight-bold d-block d-sm-none">
//               CH <MdArrowDropDown size="20" />
//             </span>
//           </Media>
//         </Media>
//       </DropdownToggle>
//         <DropdownMenu className="dropdown-menu-arrow" right>
//           {channels.map(channel => (
//             <DropdownItem 
//                   key={channel.channel_id} 
//                   onClick={() => this.handleChannelSelect(channel)}
//                   data-test-id="channel-item"
//             >
//             <span>{channel.name}</span>
//             </DropdownItem>
//           ))}
//         </DropdownMenu>
//         </div>
//       );
//     }
//   }

  render() {
    return (
        <h1>Hello comp2</h1>
    );
  }
}

export default Comp2;