export const addReview = (review, hubId, history) => {

    return (dispatch) => {
      fetch(`http://localhost:4000/api/v1/hub/${hubId}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(review)
    })
      .then(response => response.json())
      .then(hub => {
        dispatch({type: 'ADD_REVIEW', payload: hub})
        history.push(`/hubs/${hub.data.id}`)
      })
      .catch(err => alert(err));
  }
}