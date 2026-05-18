import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ContactSection from '../components/Contact/ContactSection';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Footer from '../components/Footer';
import FeatureRequestModal from '../components/Contact/FeatureRequestModal';

const Contactus = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const cardsData = [
        {
            icon: <SupportAgentIcon fontSize="medium" />,
            title: 'Technical Support',
            subtitle: '+91 12345 23454',
        },
        {
            icon: <EmailOutlinedIcon fontSize="medium" />,
            title: 'Email:24*7',
            subtitle: 'contact@ronohub.com',
        }
    ];

    const formPlaceholders = {
        fullName: 'Your Full Name',
        company: 'Your Company',
        email: 'Your Email',
        mobile: 'Your Mobile No',
        subject: 'Enter Subject',
        message: 'Write Message Here',
    };

    return (
        <div>
            <Navbar />
            <ContactSection
                heading="Contact Us"
                description="Connect with our team for product inquiries, service support, or partnership opportunities. We're committed to providing prompt and reliable assistance."
                cardsData={cardsData}
                tagText="Feature Request"
                onTagClick={handleOpenModal}
                formHeader={"We'd Love To Hear\nFrom You! Let's Get in Touch"}
                formPlaceholders={formPlaceholders}
            />
            <FeatureRequestModal open={modalOpen} onClose={handleCloseModal} />
            <Footer />
        </div>
    );
};

export default Contactus;