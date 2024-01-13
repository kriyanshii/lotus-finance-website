/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Kx7Z30nNzLX
 */
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { CardContent, Card } from "@/components/ui/card"
function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Let's Talk Branding</h2>
          <p className="mb-8">From strategy to execution, we're here to help you achieve your branding goals.</p>
        </div>
        <Card className="w-full">
          <CardContent>
            <form>
              <div className="grid gap-4 mb-6">
                <Input placeholder="Your Name" type="text" />
                <Input placeholder="Your Email" type="email" />
                <Textarea placeholder="Your Message" />
              </div>
              <Button>Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <div>
          <h3 className="text-xl font-semibold mb-4">Common Questions</h3>
          <div className="space-y-4">
            <details className="group">
              <summary className="flex justify-between items-center">
                What services do you offer for branding?
                <ChevronDownIcon className="transition-transform group-open:rotate-180" />
              </summary>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center">
                Can you help with rebranding an existing company?
                <ChevronDownIcon className="transition-transform group-open:rotate-180" />
              </summary>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center">
                How do you measure the success of a branding?
                <ChevronDownIcon className="transition-transform group-open:rotate-180" />
              </summary>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center">
                How do you ensure brand consistency across all marketing materials and platforms?
                <ChevronDownIcon className="transition-transform group-open:rotate-180" />
              </summary>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center">
                How do you integrate branding across digital and traditional marketing channels?
                <ChevronDownIcon className="transition-transform group-open:rotate-180" />
              </summary>
            </details>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6">Let's start building your brand's unique story together.</h2>
          <p className="mb-8">Want to see what a difference a strong brand can make? Request a consultation today.</p>
          <Button variant="outline">Get in Touch</Button>
        </div>
      </div>
      <footer className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex justify-between md:col-span-3">
            <div className="flex space-x-4">
              <TwitterIcon className="h-6 w-6" />
              <InstagramIcon className="h-6 w-6" />
              <DribbbleIcon className="h-6 w-6" />
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h6 className="font-semibold">Pages</h6>
                <ul className="mt-4 space-y-2">
                  <li>Home</li>
                  <li>Services</li>
                  <li>About</li>
                  <li>Jobs</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h6 className="font-semibold">CMS</h6>
                <ul className="mt-4 space-y-2">
                  <li>Work</li>
                  <li>Blog Single</li>
                  <li>Blog</li>
                  <li>Shop</li>
                  <li>Shop Single</li>
                </ul>
              </div>
              <div>
                <h6 className="font-semibold">Utility Pages</h6>
                <ul className="mt-4 space-y-2">
                  <li>404 Error Page</li>
                  <li>Password Protected</li>
                  <li>Styleguide</li>
                  <li>Changelog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function DribbbleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

export default ContactUs;