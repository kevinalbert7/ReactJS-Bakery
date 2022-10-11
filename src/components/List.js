import React, { Component } from 'react'

class List extends Component {

    render() {
        const { items, handleClick } = this.props

        return (
            <>
                <h2 className='mb-4'>List</h2>
                <ul className='row list-group mb-3'>
                    {items.map(item => {
                        return <li className='col-8 d-flex justify-content-between list-group-item'>{item.name} - {item.price}
                            <button 
                                type='button'
                                className='btn btn-outline-danger'
                                onClick={() => handleClick(item)}
                            >
                                Supprimer
                            </button> 
                        </li>
                    })}        
                </ul>
            </>
        )
    }
}

export default List