import axios from 'axios';
import { Button, Space } from 'antd';

 const AuthButtons = () => {

    

    

    return(
        <Space>
            
            <Button danger onClick={logout}> Logout </Button>
        </Space>
    )
}

export default AuthButtons