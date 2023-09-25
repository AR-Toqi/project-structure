const express= require('express')
const userController= require('../Controllers/userController')
const adminController= require('../Controllers/adminController')
const subAdminController= require('../Controllers/subAdminController')
const postController= require('../Controllers/postController')
const customerController= require('../Controllers/customerController')
const categoryController= require('../Controllers/categoryController')
const orderController= require('../Controllers/orderController')
const productController= require('../Controllers/productController')
const order_itemController= require('../Controllers/order_itemController')
const paymentController= require('../Controllers/paymentController')
const shipmentController= require('../Controllers/shipmentController')
const cartController= require('../Controllers/cartController')
const wishlistController= require('../Controllers/wishlistController')

const router=express.Router();


// User 
router.get('/users/create', userController.createUser);
router.get('/users/read',userController.readUser);
router.get('/users/delete', userController.deleteUser);
router.get('/users/update', userController.updateUser);


// Admin 
router.get('/admins/create', adminController.createAdmin);
router.get('/admins/read', adminController.readAdmin);
router.get('/admins/delete', adminController.deleteAdmin);
router.get('/admins/update', adminController.updateAdmin);


// SubAdmin 
router.get('/subAdmins/create', subAdminController.createSubAdmin);
router.get('/subAdmins/read', subAdminController.readSubAdmin);
router.get('/subAdmins/delete', subAdminController.deleteSubAdmin);
router.get('/subAdmins/update', subAdminController.updateSubAdmin);


// Post 
router.get('/posts/create', postController.createPost);
router.get('/posts/read', postController.readPost);
router.get('/posts/delete', postController.deletePost);
router.get('/posts/update', postController.updatePost);


// Customer 
router.get('/customers/create', customerController.createCustomer);
router.get('/customers/read', customerController.readCustomer);
router.get('/customers/delete', customerController.deleteCustomer);
router.get('/customers/update', customerController.updateCustomer);

// Category 
router.get('/categories/create', categoryController.createCategory);
router.get('/categories/read', categoryController.readCategory);
router.get('/categories/delete', categoryController.deleteCategory);
router.get('/categories/update', categoryController.updateCategory);

// Order 
router.get('/orders/create', orderController.createOrder);
router.get('/orders/read', orderController.readOrder);
router.get('/orders/delete', orderController.deleteOrder);
router.get('/orders/update', orderController.updateOrder);

// Product 
router.get('/products/create', productController.createProduct);
router.get('/products/read', productController.readProduct);
router.get('/products/delete', productController.deleteProduct);
router.get('/products/update', productController.updateProduct);

// Order Item 
router.get('/orderItems/create', order_itemController.createOrderItem);
router.get('/orderItems/read', order_itemController.readOrderItem);
router.get('/orderItems/delete', order_itemController.deleteOrderItem);
router.get('/orderItems/update', order_itemController.updateOrderItem);

// Payment 
router.get('/payments/create', paymentController.createPayment);
router.get('/payments/read', paymentController.readPayment);
router.get('/payments/delete', paymentController.deletePayment);
router.get('/payments/update', paymentController.updatePayment);

// Shipment 
router.get('/shipments/create', shipmentController.createShipment);
router.get('/shipments/read', shipmentController.readShipment);
router.get('/shipments/delete', shipmentController.deleteShipment);
router.get('/shipments/update', shipmentController.updateShipment);

// Cart 
router.get('/carts/create', cartController.createCart);
router.get('/carts/read', cartController.readCart);
router.get('/carts/delete', cartController.deleteCart);
router.get('/carts/update', cartController.updateCart);

// Wishlist 
router.get('/wishlists/create', wishlistController.createWishlist);
router.get('/wishlists/read', wishlistController.readWishlist);
router.get('/wishlists/delete', wishlistController.deleteWishlist);
router.get('/wishlists/update', wishlistController.updateWishlist);

module.exports = router;

