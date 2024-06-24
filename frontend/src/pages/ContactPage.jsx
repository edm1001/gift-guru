import { IoIosSend } from "react-icons/io";
import { About } from '../components/About';
import { FaYoutube, FaTiktok } from "react-icons/fa";
// TODO: Work on sending email in backend, add image background for first col in con
const ContactPage = () => {
  return (
    <section className='mt-16'>
      <div className='flex justify-center bg-lightblue grid grid-cols-1 md:grid-cols-3 gap-8 p-8'>
        <div className='flex flex-col justify-center md:col-span-1'>
          <h3 className='text-2xl font-bold mb-4'>Have a Gift Idea?</h3>
          <hr className='border border-grey'/>
          <p className='text-lg'>We would love to hear from you! Fill out the form below to send us your suggestions.</p>
          <a className='text-underline'>gift-guide@gmail.com</a>
          <div className='flex flex-row justify-end space-x-2'>
          <FaYoutube size={30} color='red' className='hover:scale-125'/> 
          <FaTiktok size={24}  className='hover:scale-125'/>
          </div>
        </div>
        <div className='flex items-center justify-end md:col-span-2'>
          <form className='w-full max-w-lg bg-grey opacity-80 p-8 rounded-lg shadow-md'>
          <div className='mb-4 flex flex-col md:flex-row md:space-x-4'>
              <div className='flex-1 mb-4 md:mb-0'>
                <label htmlFor='name' className='block text-sm font-bold mb-2'>Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full border-b-2 focus:outline-none'
                />
              </div>
              <div className='flex-1'>
                <label htmlFor='subject' className='block text-sm font-bold mb-2'>Subject</label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className='w-full border-b-2 focus:outline-none '
                />
              </div>
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-bold mb-2'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full border-b-2 focus:outline-none '
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block text-sm font-bold mb-2'>Message</label>
              <textarea
                id='message'
                name='message'
                rows='5'
                className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue'
              ></textarea>
            </div>
            <div className='flex justify-end'>
              <button
                type='submit'
              >
                <IoIosSend color='blue' size={30} className='hover:scale-110 hover:opacity-70'/>
              </button>
            </div>
          </form>
        </div>
      </div>
      <About />
    </section>
  );
};

export default ContactPage;
