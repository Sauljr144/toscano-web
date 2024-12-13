import Link from "next/link"

const ContactForm = () =>{
    return (
        <div className="container mx-auto p-3 mt-10 flex flex-col justify-center font-poppins px-56">
            <div className="">

                <h3 className="text-4xl font-medium text-center">Get In Touch</h3>
                <p className="text-center">Questions about our farm, products, online ordering or pickup? Please get in touch using this form. Also remember to <Link href={""} className="underline text-orange-dark">check out our online shop!</Link></p>
            </div>
        </div>
    )
}

export default ContactForm