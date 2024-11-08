import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef } from 'react';

function OrderComplete() {
  const { bookingData } = useSelector((state) => state.booking);
  const printRef = useRef();

  const baseRoomRate = 300;

  // Calculate total amount
  const calculateAmount = () => {
    if (!bookingData) return 0;
    const nights = (new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) / (1000 * 3600 * 24);
    return nights * bookingData.rooms * baseRoomRate;
  };

  const totalAmount = calculateAmount();

  // Function to print only the order details section in a single page
  const handlePrint = () => {
    const printContent = printRef.current.innerHTML;
    const printWindow = window.open('', '', 'width=800,height=800');
    printWindow.document.write(`
      <html>
        <head>
          <title>Order Details</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 200px; margin: 0; }
            .no-break { page-break-inside: avoid; } /* Prevents page breaks inside elements */
            .container { max-width: 800px; margin: auto; }
          </style>
        </head>
        <body>
        <center>
        <div class="container no-break">${printContent}</div>
        </center>
          
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10" >
      <div className="bg-white rounded-lg shadow-md p-8 text-center" ref={printRef}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">Order Complete</h2>
        <p className="text-gray-600 mb-6">Thank you for booking with Brisphere!</p>
        
        {bookingData ? (
          <div className="text-left bg-gray-50 p-4 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Booking Details:</h3>
            <p>Name: {bookingData.name}</p>
            <p>Email: {bookingData.email}</p>
            <p>Phone: {bookingData.phone}</p>
            <p>Check-in: {new Date(bookingData.checkIn).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p>Check-out: {new Date(bookingData.checkOut).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p>Adults: {bookingData.adults}</p>
            <p>Children: {bookingData.children}</p>
            <p>Rooms: {bookingData.rooms}</p>
            <p className="font-semibold mt-4">Total Amount: ₹{Math.ceil(totalAmount)}</p>
          </div>
        ) : (
          <p className="text-gray-600">No booking details available at this time.</p>
        )}
      </div>

      <div className="space-x-4 mt-4 text-center">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-200 ease-in-out"
        >
          Return Home
        </Link>
        <button
          onClick={handlePrint}
          className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-200 ease-in-out"
        >
          Print Details
        </button>
      </div>
    </div>
  );
}

export default OrderComplete;


