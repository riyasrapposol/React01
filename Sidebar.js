import React, { Component } from "react";
import styled from "styled-components";
 
const SidebarContainer = styled.div`
    width: 200px;
    background-color: #26478d;
    color: #fff;
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
    position: absolute;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    z-index: 1;      /* Stay on top of everything */
    top: 3.6em;      /* Stay at the top */
    overflow-x: hidden;    /* Disable horizontal scroll */
    overflow-y: hidden;
    padding-top: 10px;
`;

const SidebarMenu = styled.ul`
    display: flex;
    align-items: left;
    flex-direction: column;
    list-style: none;
    width: 100%;
    padding-left: 0px;
`;
 
const MenuLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 16px;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 600;
    height: 45px;
    color: #fff;
    margin: 0px 30px 30px 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #2e2e33;
`;
 
const MenuLogoMid = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 16px;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 600;
    height: 45px;
    color: #fff;
    margin: 20px 30px 30px 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #2e2e33;
`;

const SidebarMenuItem = styled.li`
    display: flex;
    height: 40px;
    width: 100%;
    align-items: center;
    padding-left: 30px;
    &:hover {
    background: ##CC93C0;
    box-shadow: inset 3px 0 0 0 #ffffff;
    cursor: pointer;
`;
 
const Icon = styled.svg`
    width: 20px;
    height: 20px;
`;
 
const SidebarMenuItemLabel = styled.p`
    font-family: "Open Sans", sans-serif;
    color: #fff;
   
    margin-top:15px;
margin-left:5px;
  
   

    z-index: 1;
    padding: 13px ;
    font-size: 16px;
    line-height: 1.5;
   
    letter-spacing: .6px;
`;
 
const MenuSignOut = styled.div`
    border-top: 1px solid #2e2e33;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 500;
    height: 45px;
    color: #fff;
    margin: 200px 30px 60px 30px;
    padding: 20px 0px 0px 30px;
`;

const MenuLink = styled.a`
    color: white;
    &:hover { color: #CC93C0; }
`;

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = { menuFrank: [] , menuEmulator:[]};
        
        this.populateMenuData = this.populateMenuData.bind(this);
      }
    
      componentDidMount() {
        this.populateMenuData();
      }

      toggleMenu = (event, type) => {
              alert(type);
          global.DocUrl = type;
      };
      
    render() {

    return (
                <SidebarContainer>
                <SidebarMenu>
                    <MenuLogo>
                    {" "}
                    <Icon viewBox="0 0 20 20">
                    <path
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 17"
                    fill="white"
                    d="M4.23832506,4.349694 L5.39932506,7.16397019 L2.73332506,7.16397019 L4.23832506,4.349694 Z M13.5843251,9.22420166 L16.5773251,9.22420166 L11.0983251,15.2483185 L13.5843251,9.22420166 Z M8.74132506,15.2627401 L3.10032506,9.22420166 L6.24932506,9.22420166 L8.74132506,15.2627401 Z M7.56832506,7.16397019 L6.29332506,4.07362298 L13.5403251,4.07362298 L12.2653251,7.16397019 L7.56832506,7.16397019 Z M11.4153251,9.22420166 L9.91732506,12.8553596 L8.41832506,9.22420166 L11.4153251,9.22420166 Z M17.2603251,7.16397019 L14.4343251,7.16397019 L15.6113251,4.3105496 L17.2603251,7.16397019 Z M19.7873251,7.43592074 L16.9333251,2.26783009 C16.8173251,2.08652972 16.6613251,2 16.4823251,2 C16.2933251,2 16.0773251,2.0133915 15.8533251,2.0133915 L4.18832506,2.0133915 C3.96732506,2.0133915 3.75432506,2.00515058 3.56732506,2.00515058 C3.37732506,2.00515058 3.21332506,2.07313822 3.09432506,2.26783009 L0.198325064,7.75216627 C-0.107674936,8.25383264 -0.0556749356,8.8337878 0.327325064,9.27570745 L9.02132506,18.55499 C9.27732506,18.8516633 9.63032506,19 9.98332506,19 C10.3423251,19 10.7013251,18.848573 10.9593251,18.5436587 L19.6813251,9.01508817 C20.0633251,8.56389747 20.1063251,7.93449676 19.7873251,7.43592074 L19.7873251,7.43592074 Z"
                    id="path-1"
                    />
                    </Icon>
                    Frank
                    </MenuLogo>
                    {this.state.menuFrank.map(m =>
                        
                                <SidebarMenuItem>
                                <Icon viewBox="0 0 20 20">
                                <path
                                width="20px"
                                height="20px"
                                fill="white"
                                d="M18,17 C18,17.552 17.552,18 17,18 L14,18 C13.448,18 13,17.552 13,17 L13,14 C13,13.448 13.448,13 14,13 L17,13 C17.552,13 18,13.448 18,14 L18,17 Z M18,11 L13,11 C11.895,11 11,11.895 11,13 L11,18 C11,19.105 11.895,20 13,20 L18,20 C19.105,20 20,19.105 20,18 L20,13 C20,11.895 19.105,11 18,11 L18,11 Z M18,6 C18,6.552 17.552,7 17,7 L14,7 C13.448,7 13,6.552 13,6 L13,3 C13,2.448 13.448,2 14,2 L17,2 C17.552,2 18,2.448 18,3 L18,6 Z M18,0 L13,0 C11.895,0 11,0.895 11,2 L11,7 C11,8.105 11.895,9 13,9 L18,9 C19.105,9 20,8.105 20,7 L20,2 C20,0.895 19.105,0 18,0 L18,0 Z M7,17 C7,17.552 6.552,18 6,18 L3,18 C2.448,18 2,17.552 2,17 L2,3 C2,2.448 2.448,2 3,2 L6,2 C6.552,2 7,2.448 7,3 L7,17 Z M7,0 L2,0 C0.895,0 0,0.895 0,2 L0,18 C0,19.105 0.895,20 2,20 L7,20 C8.105,20 9,19.105 9,18 L9,2 C9,0.895 8.105,0 7,0 L7,0 Z"
                                />
                                </Icon>
                                <SidebarMenuItemLabel>
                                <button  type="button" value={m.link} onClick={event => this.toggleMenu(event, this.value)} >Click Me!</button>
                                        <MenuLink href="#" onClick={event => this.toggleMenu(event, m.link)} >{m.name}</MenuLink></SidebarMenuItemLabel>
                                </SidebarMenuItem>
                                
                        )
                    }
                   <MenuLogoMid>
                   {" "}
                   <Icon viewBox="0 0 20 20">
                   <path
                   width="20px"
                   height="20px"
                   viewBox="0 0 20 17"
                   fill="white"
                   d="M18,13.4070943 C18,13.8456529 17.729,14.2359392 17.324,14.3787018 L11,16.605388 L11,4.71500707 L11,4.53321581 L16.676,2.53453901 C17.325,2.30550257 18,2.80054996 18,3.50614654 L18,13.4070943 Z M9,4.71500707 L9,16.605388 L2.676,14.3787018 C2.271,14.2359392 2,13.8456529 2,13.4070943 L2,3.50614654 C2,2.80054996 2.675,2.30550257 3.324,2.53453901 L9,4.53321581 L9,4.71500707 Z M17.337,0.117845024 L10.331,2.64443543 C10.117,2.72146562 9.883,2.72146562 9.669,2.64443543 L2.663,0.117845024 C1.362,-0.351525631 0,0.639596213 0,2.05592474 L0,14.1157721 C0,14.9969975 0.547,15.7806514 1.36,16.0620684 L9.68,18.9460789 C9.888,19.0179737 10.112,19.0179737 10.32,18.9460789 L18.64,16.0620684 C19.453,15.7806514 20,14.9969975 20,14.1157721 L20,2.05592474 C20,0.639596213 18.638,-0.351525631 17.337,0.117845024 L17.337,0.117845024 Z"
                   id="path-1"
                   />
                   </Icon>
                   Emulators
                   </MenuLogoMid>
                   {this.state.menuEmulator.map(m =>
                        
                        <SidebarMenuItem>
                        <Icon viewBox="0 0 20 20">
                        <path
                        width="20px"
                        height="20px"
                        fill="white"
                        d="M18,17 C18,17.552 17.552,18 17,18 L14,18 C13.448,18 13,17.552 13,17 L13,14 C13,13.448 13.448,13 14,13 L17,13 C17.552,13 18,13.448 18,14 L18,17 Z M18,11 L13,11 C11.895,11 11,11.895 11,13 L11,18 C11,19.105 11.895,20 13,20 L18,20 C19.105,20 20,19.105 20,18 L20,13 C20,11.895 19.105,11 18,11 L18,11 Z M18,6 C18,6.552 17.552,7 17,7 L14,7 C13.448,7 13,6.552 13,6 L13,3 C13,2.448 13.448,2 14,2 L17,2 C17.552,2 18,2.448 18,3 L18,6 Z M18,0 L13,0 C11.895,0 11,0.895 11,2 L11,7 C11,8.105 11.895,9 13,9 L18,9 C19.105,9 20,8.105 20,7 L20,2 C20,0.895 19.105,0 18,0 L18,0 Z M7,17 C7,17.552 6.552,18 6,18 L3,18 C2.448,18 2,17.552 2,17 L2,3 C2,2.448 2.448,2 3,2 L6,2 C6.552,2 7,2.448 7,3 L7,17 Z M7,0 L2,0 C0.895,0 0,0.895 0,2 L0,18 C0,19.105 0.895,20 2,20 L7,20 C8.105,20 9,19.105 9,18 L9,2 C9,0.895 8.105,0 7,0 L7,0 Z"
                        />
                        </Icon>
                        <SidebarMenuItemLabel><MenuLink href="#" onMouseOver={event => this.toggleMenu(event, m.link)} >{m.name}</MenuLink></SidebarMenuItemLabel>
                        </SidebarMenuItem>
                        
                )
                }   
              </SidebarMenu>
            </SidebarContainer> 
        );
}

async populateMenuData() {
    const response = await fetch('menu');
    const data = await response.json();


    var menuApi = [],
        menuEmu = [],
        i = 0,
        j = data.length;

        for (; i < data.length; i++){   
                
                if(data[i].id ==0) 
                {
                menuApi.push(data[i]);
                }
                else
                {
                menuEmu.push(data[i]);
                }
        }
      
          
    this.setState({ menuFrank: menuApi ,menuEmulator: menuEmu});
  }
}
export default Sidebar;