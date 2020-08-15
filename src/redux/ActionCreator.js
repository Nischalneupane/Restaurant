import * as ActionType from  './ActionTypes';
import { baseURL } from '../shared/baseUrl';


export const addComment = (dishId, rating, author, comment) => (
    {
        type: ActionType.ADD_COMMENT,
        payload : {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    }
);

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseURL + 'dishes')
        .then(response => {
            if (response.ok) {
            return response;
            } else {
            const error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
            }
        },
        error => {
                const errmess = new Error(error.message);
                throw errmess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))
};

export const dishesLoading = (isLoading) => ({
    type: ActionType.DISHES_LOADING,
})

export const addDishes = (dishes) => ({
    type: ActionType.ADD_DISHES,
    payload: dishes,
});

export const dishesFailed = (errMess) => ({
    type: ActionType.DISHES_FAILED,
    payload: errMess,
});

export const fetchPromotions = () => (dispatch) => {
    dispatch(promotionsLoading(true));
    return fetch(baseURL + 'promotions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error('Error ' + response.status + ': ' + response.statusText);
        //   error.response = response;
          throw error;
        }
      },
      error => {
            const errMess = new Error(error.message);
            throw errMess;
      })
        .then(response => response.json())
        .then(promos => dispatch(addPromotions(promos)))
        .catch(error => dispatch(promotionsFailed(error.message)))
};

export const promotionsLoading = (isLoading) =>({
    type:ActionType.PROMOTIONS_LOADING,
});

export const addPromotions = (promos) => ({
    type: ActionType.ADD_PROMOTIONS,
    payload: promos,
});

export const promotionsFailed = (errMess) => ({
    type: ActionType.PROMOTIONS_FAILED,
    payload: errMess,
});

export const fetchComments = () => (dispatch) => {
    return fetch(baseURL + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            const errmess = new Error(error.message);
            throw errmess;
      })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))        
        .catch(error => dispatch(dishesFailed(error.message)))
}

export const addComments = (comments) => ({
    type: ActionType.ADD_COMMENTS,
    payload: comments 
})

export const commentsFailed = (errMess) => ({
    type: ActionType.COMMENTS_FAILED,
    payload: errMess
})
