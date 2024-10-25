import { 
    ContactCard, 
    ContactCards, 
    ContactContainer, 
    ContactDescription, 
    ContactEmail, 
    ContactEmailCopied, 
    ContactInformation, 
    ContactName, 
    ContactPosition, 
    ContactTitle, 
    ProfileImage 
} from "./style/styledComponents";
import { IoMdMail } from 'react-icons/io';
import { MdCheck } from 'react-icons/md';
import contactData from '../../json/contacts.json';
import zackTufford from '../../assets/images/zack_tufford.jpg';
import chrisKendig from '../../assets/images/chris_kendig.jpg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState, useEffect } from "react";

const Contact = () => {
    const [ isCopied, setIsCopied ] = useState(-1);

    useEffect(() => {
        if (isCopied >= 0) {
            setTimeout(() => {
                setIsCopied(-1);
            }, 2000);
        }
    }, [isCopied])

    return (
        <ContactContainer>
            <ContactTitle>
                Contact Information
            </ContactTitle>
            <ContactDescription>
                If you have any questions at all or are getting stuck in a certain area, please feel free to reach out to one of us at your earliest convenience.
            </ContactDescription>
            <ContactCards>
                {
                    contactData.map((contact, contactIndex) => {
                        let contactImage = null;
                        switch(contact.image) {
                            case 'chrisKendig': 
                                contactImage = chrisKendig;
                                break;
                            case 'zackTufford': 
                                contactImage = zackTufford;
                                break;
                            default: 
                                contactImage = '';
                                break;
                        }
                        return (
                            <ContactCard key={contact.image}>
                                <ProfileImage>
                                    <img src={contactImage} alt={contact.name} />
                                </ProfileImage>
                                <ContactInformation>
                                    <ContactName>
                                        { contact.name }
                                    </ContactName>
                                    <ContactPosition>
                                        { contact.position }
                                    </ContactPosition>
                                    <CopyToClipboard 
                                        text={contact.contact.email}
                                        onCopy={() => setIsCopied(contactIndex)}
                                    >
                                        <ContactEmail>
                                            <IoMdMail />
                                            { contact.contact.email }
                                            {
                                                isCopied === contactIndex && (
                                                    <ContactEmailCopied>
                                                        <MdCheck /> Copied!
                                                    </ContactEmailCopied>
                                                )
                                            }
                                        </ContactEmail>
                                    </CopyToClipboard>
                                </ContactInformation>
                            </ContactCard>
                        )
                    })
                }
            </ContactCards>
        </ContactContainer>
    )
}

export default Contact;