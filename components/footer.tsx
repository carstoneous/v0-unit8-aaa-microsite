import Link from "next/link"
import { AtomIcon, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <AtomIcon className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">AAA Nuclear Medicine</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Advanced Accelerator Applications (AAA) is a leader in nuclear medicine, providing innovative diagnostic
              and therapeutic solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#opportunities" className="text-sm text-muted-foreground hover:text-primary">
                  AI Opportunities
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="text-sm text-muted-foreground hover:text-primary">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#competitive-edge" className="text-sm text-muted-foreground hover:text-primary">
                  Competitive Edge
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">contact@aaa-nuclear.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-sm text-muted-foreground">
                  123 Nuclear Way, Suite 100
                  <br />
                  Medical District, NY 10001
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest news and advancements in nuclear medicine.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-muted-foreground/20 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Advanced Accelerator Applications. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
