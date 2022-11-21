const { User, Product, Review } = require('../models')


// C
// R ......
// U
// D



const getAllReviews = async (req, res) => {
  try{
    const review = await Review.findAll()
    res.send(review)
  } catch (errpr) {
    throw error
  }
}

const GetReviewDetails = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.review_id)
    res.send(review)
  } catch (error) {
    throw error
  }
}

const AddReview = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let productId = parseInt(req.params.user_id)
    let reviewBody = {userId, productId, ...req.body}
    let review = await Review.create(reviewBody)
    res.send(review)
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    let updatedReview = await Review.update(req.body, {
      where: {id: reviewId},
      returning: true 
    })
    res.send(updatedReview)
  } catch (error) {
    throw error
  }
}

const DeleteReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    await Review.destroy({where: {id: reviewId} })
    res.send({message: `Deleted review with an id of ${reviewId}`})
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetReviewDetails,
  getAllReviews,
  AddReview,
  UpdateReview,
  DeleteReview
}