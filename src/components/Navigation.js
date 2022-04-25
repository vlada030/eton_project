import styled from 'styled-components';
import {Navbar, Sidebar} from '.'

function Navigation() {
    return(
        <Wrapper>
            <Navbar />
            <Sidebar />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
`

export default Navigation;