export const deleteHub = (hubid, history) =>{
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/hubs/${hubId}`, {
          method: 'DELETE'
        })
        .then(response => response .json())
        .then (hubId => {
            dispatch ({type: 'DELETE_HUB', payload: hubId})
            history.push('/hubs')
        })
        .catch(err => alert(err));
    }
}