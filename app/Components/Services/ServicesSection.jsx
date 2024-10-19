import Image from 'next/image';
const services = [
  {
    id: 1,
    icon: '/service/web.jpg',
    title: 'Web Development',
    description:'We build custom web applications and websites using modern technologies and best practices.',
    tags: ['webdevelopment']
  },
  {
    id: 2,
    icon: '/service/storefront.png',
    title: 'Branding',
    description:'We help businesses establish a strong brand identity through logo design, color schemes, typography, and messaging.',
    tags: ['webdevelopment', 'branding']
  },
  {
    id: 3,
    icon: '/service/digital.jpg',
    title: 'Digital Marketing',
    description:'We offer a range of digital marketing services, including SEO, social media marketing, email marketing, and paid advertising to generate more leads to your business.',
    tags: ['webdevelopment','branding', 'digital marketing']
  },
  {
    id: 4,
    icon: '/service/support.jpeg',
    title: 'Maintenance and Support',
    description:'We provide ongoing maintenance and support for websites and web applications to ensure they stay up-to-date and secure.',
    tags: ['webdevelopment', 'support', 'maintenence']
  },
  {
    id:5,
    icon: '/service/ai.jpeg',
    title: 'AI Consulting',
    description:'Transform your business with tailored AI solutions. From automating workflows to unlocking data insights, we guide you in integrating AI technologies that drive efficiency and growth. Let’s make your business smarter, faster.',
    tags: ['webdevelopment', 'AI', 'consulting']
  },
  {
    id:6,
    icon: '/service/whitevan.png',
    title: 'Complete Branding Solutions',
    description: "We'll help you build a cohesive brand across both digital and physical platforms. From custom signage, t-shirts, stickers, and banners to car decals, we ensure your brand stands out everywhere. Whether online or in the real world, we deliver high-quality, consistent branding that connects with your customers.",
    tags: ['branding', 'banners', 'decals', 'shirts']
  }
];

const ServicesSection = () => {
  return (
    <div className='grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20'>
    <section id='services' className="px-6 bg-zinc-100 pt-10 z-10  rounded">
      
      <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
      
      <p className="text-xl text-gray-600 text-center mb-10">
        Barcias Tech specializes in helping small to medium size businesses. Our
        services include web design, branding, digital marketing, and much
        more. We understand the budget constraints of small businesses thus we
        provide high quality affordable services.
      </p>
     
      <div className="flex flex-wrap justify-center">
        {services.map((service) => (
          <div key={service.id} className="max-w-sm bg-zinc-100 rounded overflow-hidden shadow-lg m-4">
            <div className="px-6 py-4">
              <Image src={service.icon} width={500} height={200} alt={service.title} className="text-gray-300 text-5xl mb-4" />
              <div className="font-bold text-xl mb-2">{service.title}</div>
              <p className="text-gray-700 text-base">{service.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {service && service.tags.map(tag => (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default ServicesSection;
