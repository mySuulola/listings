import React from 'react'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
const Navbar = ({setVisible, visible}) => {
    return (
        <div className="w-100 py-3 d-flex justify-content-between align-items-center">
            <h4 className="text-white weight-400 px-2 mb-0">Logo</h4>
            <div>
            <SearchOutlined style={styles.icon} />
            <FilterOutlined onClick={() => setVisible(!visible)} style={styles.icon} />
            </div>
        </div>
    )
}

const styles = {
    icon: {
        fontSize: 20,
        color: "#fff",
        padding: 10
    }
}

export default Navbar
