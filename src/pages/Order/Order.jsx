import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import Loader from '../../components/loader/Loader';

function Order() {
  const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  const userid = currentUser?.user?.uid;

  const context = useContext(myContext);
  const { mode, loading, order } = context;

  const userOrders = order.filter(obj => obj.userid === userid);

  return (
    <Layout>
      {loading && <Loader />}
      
      {userOrders.length > 0 ? (
        <div className="pt-10 px-4 md:px-10">
          {userOrders.map((orderItem, idx) => (
            <div key={idx} className="mb-8 max-w-5xl mx-auto space-y-4">
              <h2 
                className={`text-xl font-bold mb-4 ${mode === 'dark' ? 'text-white' : 'text-gray-800'}`}
              >
                Order #{idx + 1}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {orderItem.cartItems.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4`}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full md:w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-between flex-1">
                      <h3 className={`font-semibold text-lg ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item.description}
                      </p>
                      <p className={`font-bold mt-2 ${mode === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>
                        ₹{item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-center text-2xl text-pink-500 mt-20">
          No Orders Found
        </h2>
      )}
    </Layout>
  );
}

export default Order;