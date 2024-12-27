export default function Header1(){
    return <div className="grid grid-cols-1 lg:grid-cols-[60%,40%] gap-4">
    {/* Div 1 */}
    <div className="bg-blue-500 p-4 sm:max-w-max">
      <img src="/path-to-image1.jpg" alt="Image 1" className="w-full max-w-sm mx-auto" />
      <p className="mt-2 text-white text-center">
        This is some text that adjusts dynamically.
      </p>
      <button className="mt-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-300">
        Learn More
      </button>
    </div>
  
    {/* Div 2 */}
    <div className="bg-green-500 p-4 sm:max-w-max">
      <img src="/path-to-image2.jpg" alt="Image 2" className="w-full max-w-sm mx-auto" />
      <p className="mt-2 text-white text-center">
        Here is another paragraph of text with adjustable size.
      </p>
      <button className="mt-4 px-4 py-2 bg-white text-green-500 rounded hover:bg-green-300">
        Get Started
      </button>
    </div>
  </div>  
}