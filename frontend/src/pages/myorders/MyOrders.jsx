// MyOrders.jsx

import React, { useContext, useEffect, useState } from 'react';
import { 
    FaBox,
    FaCheckCircle,
    FaTruck,
    FaClock,
    FaMapMarkerAlt,
    FaCheck
} from "react-icons/fa";
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';
import './myorders.css';

const MyOrders = () => {
    const [data, setData] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    const { url, token } = useContext(StoreContext);

    const fetchOrders = async () => {
        try {
            setLoading(true);
            const response = await axios.post(
                url + "/api/orders/users-order",
                {},
                {
                    headers: { token }
                }
            );

            if (response.data.success) {
                setData(response.data.data);
                console.log(response.data.data);
            }
        } catch (error) {
            console.log("Error fetching orders:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    const getStatusBadgeClass = (status) => {
        switch(status) {
            case "Order Processing":
                return "processing";
            case "Out for delivery":
                return "out-for-delivery";
            case "Delivered":
                return "delivered";
            default:
                return "";
        }
    };

    // Get detailed tracking steps with timestamps - FIXED STATUS DETECTION
    const getTrackingSteps = (order) => {
        const baseDate = new Date(order.createdAt || Date.now());
        const steps = [];
        const currentStatus = order.Status;

        // Step 1: Order Placed - ALWAYS completed if order exists
        steps.push({
            title: "Order Placed",
            time: baseDate.toLocaleString('en-US', { 
                month: 'short', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }),
            description: "Your order has been confirmed",
            location: "Restaurant",
            status: "completed" // Always completed
        });

        // Step 2: Order Processing
        const processingDate = new Date(baseDate.getTime() + 10 * 60000);
        let processingStatus = "pending";
        if (currentStatus === "Order Processing" || currentStatus === "Out for delivery" || currentStatus === "Delivered") {
            processingStatus = "completed";
        }
        
        steps.push({
            title: "Order Processing",
            time: currentStatus === "Order Processing" || currentStatus === "Out for delivery" || currentStatus === "Delivered" 
                ? processingDate.toLocaleString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })
                : "Pending",
            description: currentStatus === "Order Processing" 
                ? "Your food is being prepared by the chef" 
                : currentStatus === "Out for delivery" || currentStatus === "Delivered"
                ? "Food preparation completed"
                : "Waiting for preparation to start",
            location: "Restaurant Kitchen",
            status: processingStatus
        });

        // Step 3: Out for Delivery
        const deliveryDate = new Date(baseDate.getTime() + 20 * 60000);
        let deliveryStatus = "pending";
        if (currentStatus === "Out for delivery" || currentStatus === "Delivered") {
            deliveryStatus = "completed";
        }
        if (currentStatus === "Out for delivery") {
            // Make it active (red/orange) instead of completed
            deliveryStatus = "active";
        }
        
        steps.push({
            title: "Out for Delivery",
            time: currentStatus === "Out for delivery" || currentStatus === "Delivered"
                ? deliveryDate.toLocaleString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })
                : "Pending",
            description: currentStatus === "Out for delivery"
                ? "Your order is on the way! Delivery in 15-20 minutes"
                : currentStatus === "Delivered"
                ? "Order delivered successfully"
                : "Awaiting pickup",
            location: currentStatus === "Delivered" ? "Delivered" : "In Transit",
            status: deliveryStatus
        });

        // Step 4: Delivered
        const deliveredDate = new Date(baseDate.getTime() + 35 * 60000);
        let deliveredStatus = "pending";
        if (currentStatus === "Delivered") {
            deliveredStatus = "completed";
        }
        
        steps.push({
            title: "Delivered",
            time: currentStatus === "Delivered"
                ? deliveredDate.toLocaleString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })
                : "Pending",
            description: currentStatus === "Delivered"
                ? "Your order has been delivered successfully! Enjoy your meal! 🎉"
                : "Waiting for delivery",
            location: currentStatus === "Delivered" ? "Your Location" : "In Transit",
            status: deliveredStatus
        });

        return steps;
    };

    // Get estimated delivery time
    const getETA = (order) => {
        if (order.Status === "Delivered") return "Delivered";
        if (order.Status === "Out for delivery") return "15-20 minutes";
        if (order.Status === "Order Processing") return "25-30 minutes";
        return "Calculating...";
    };

    // Get icon for tracking step
    const getStepIcon = (step, status) => {
        if (status === "completed") {
            return <FaCheckCircle style={{ color: 'white', fontSize: '18px' }} />;
        }
        if (status === "active") {
            if (step.title === "Order Processing") return <FaClock style={{ color: 'white', fontSize: '18px' }} />;
            if (step.title === "Out for Delivery") return <FaTruck style={{ color: 'white', fontSize: '18px' }} />;
            if (step.title === "Delivered") return <FaCheckCircle style={{ color: 'white', fontSize: '18px' }} />;
            return <FaClock style={{ color: 'white', fontSize: '18px' }} />;
        }
        return <FaBox style={{ color: 'white', fontSize: '18px' }} />;
    };

    // Loading State
    if (loading) {
        return (
            <div className='my-orders'>
                <h2>My Orders</h2>
                <div className="container" style={{ textAlign: 'center', padding: '40px' }}>
                    <p>Loading your orders...</p>
                </div>
            </div>
        );
    }

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>

            <div className="container">
                {data.length === 0 ? (
                    <div className="empty-orders">
                        <img src={assets.parcel_icon} alt="No orders" />
                        <h3>No Orders Yet</h3>
                        <p>Start shopping to see your orders here!</p>
                    </div>
                ) : (
                    data.map((order, index) => (
                        <div key={index} className="myorder-order">
                            <img src={assets.parcel_icon} alt="Order" />

                            <p>
                                {order.Items.map((item, index) => (
                                    <span key={index}>
                                        {item.Name} x {item.quantity}
                                        {index < order.Items.length - 1 && ", "}
                                    </span>
                                ))}
                            </p>

                            <p>
                                <strong>${order.Amount}.00</strong>
                            </p>

                            <p>
                                <strong>Items:</strong> {order.Items.length}
                            </p>

                            {order.Status !== "Delivered" ? (
                                <button onClick={() => setSelectedOrder(order)}>
                                    Track Order
                                </button>
                            ) : (
                                <p>
                                    <span className={`status-badge ${getStatusBadgeClass(order.Status)}`}>
                                        {order.Status}
                                    </span>
                                </p>
                            )}
                        </div>
                    ))
                )}
            </div>

            {/* TRACKING MODAL */}
            {selectedOrder && (
                <div className="order-modal" onClick={(e) => {
                    if (e.target.className === "order-modal") {
                        setSelectedOrder(null);
                    }
                }}>
                    <div className="modal-content">
                        <button 
                            className="close"
                            onClick={() => setSelectedOrder(null)}
                            aria-label="Close modal"
                        >
                            ×
                        </button>

                        <div className="modal-header">
                            <h2>
                                <FaBox style={{ width: 28, height: 28, color: '#e94560' }} />
                                Track Your Order
                            </h2>
                        </div>

                        {/* Delivery Info Cards */}
                        <div className="delivery-info-grid">
                            <div className="delivery-info-card">
                                <div className="card-label">Order ID</div>
                                <div className="card-value" style={{ fontSize: '13px', wordBreak: 'break-all' }}>
                                    #{selectedOrder._id.slice(-8)}
                                </div>
                            </div>
                            <div className="delivery-info-card">
                                <div className="card-label">Total Amount</div>
                                <div className="card-value highlight">${selectedOrder.Amount}.00</div>
                            </div>
                            <div className="delivery-info-card">
                                <div className="card-label">Estimated Delivery</div>
                                <div className={`card-value ${selectedOrder.Status === "Delivered" ? 'delivered' : 'highlight'}`}>
                                    {getETA(selectedOrder)}
                                </div>
                            </div>
                            <div className="delivery-info-card">
                                <div className="card-label">Items</div>
                                <div className="card-value">{selectedOrder.Items.length} items</div>
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="order-items-list">
                            <h4>Order Items</h4>
                            {selectedOrder.Items.map((item, idx) => (
                                <div key={idx} className="item-row">
                                    <span>{item.Name}</span>
                                    <span className="item-qty">× {item.quantity}</span>
                                </div>
                            ))}
                        </div>

                        {/* Tracking Timeline - Shows stages with proper colors */}
                        <div className="tracking-timeline">
                            {getTrackingSteps(selectedOrder).map((step, idx) => {
                                // Determine color based on status
                                let iconBg = '#e9ecef';
                                let iconBorder = '#dee2e6';
                                let titleColor = '#adb5bd';
                                let textColor = '#adb5bd';
                                let statusLabel = null;

                                if (step.status === "completed") {
                                    iconBg = '#28a745';
                                    iconBorder = '#28a745';
                                    titleColor = '#1a1a2e';
                                    textColor = '#495057';
                                    statusLabel = <span style={{ marginLeft: '8px', color: '#28a745', fontSize: '12px', fontWeight: '600' }}>✓ Completed</span>;
                                } else if (step.status === "active") {
                                    iconBg = '#e94560';
                                    iconBorder = '#e94560';
                                    titleColor = '#1a1a2e';
                                    textColor = '#495057';
                                    statusLabel = <span style={{ marginLeft: '8px', color: '#e94560', fontSize: '12px', fontWeight: '600' }}>● In Progress</span>;
                                }

                                return (
                                    <div 
                                        key={idx} 
                                        className={`tracking-item ${step.status}`}
                                    >
                                        <div 
                                            className="timeline-icon"
                                            style={{
                                                background: iconBg,
                                                borderColor: iconBorder
                                            }}
                                        >
                                            {getStepIcon(step, step.status)}
                                        </div>
                                        <div className="tracking-content">
                                            <div 
                                                className="tracking-title"
                                                style={{
                                                    color: titleColor
                                                }}
                                            >
                                                {step.title}
                                                {statusLabel}
                                            </div>
                                            <div 
                                                className="tracking-time"
                                                style={{
                                                    color: textColor
                                                }}
                                            >
                                                {step.time}
                                            </div>
                                            <div 
                                                className="tracking-description"
                                                style={{
                                                    color: textColor
                                                }}
                                            >
                                                {step.description}
                                            </div>
                                            <div 
                                                className="tracking-location"
                                                style={{
                                                    color: textColor
                                                }}
                                            >
                                                <FaMapMarkerAlt style={{ 
                                                    width: 14, 
                                                    height: 14, 
                                                    color: textColor 
                                                }} />
                                                {step.location}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyOrders;