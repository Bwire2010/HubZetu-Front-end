export const deleteHub = (hubid, history) =>{
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/hubs/${hubId}`, {
          method: 'DELETE'
        })
        .then(response => response .json())
        .then (hubId => {
            dispatch 
        })
}