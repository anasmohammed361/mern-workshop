import { Button, Checkbox, Label, Modal, TextInput, FileInput    } from 'flowbite-react';
import { useState } from 'react';
export  function ModalCustom() {
    const [openModal, setOpenModal] = useState();
    const [email, setEmail] = useState("");
    const props = { openModal, setOpenModal, email, setEmail };

    return (
        <>
            <Button onClick={() => props.setOpenModal('form-elements')}>Add Doc</Button>
            <Modal className='dark' show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body className=''>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add new Document</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="parent" value="Parent" />
                            </div>
                            <TextInput id="email" placeholder="Parent Document" required />
                        </div>

                        <div
                            className="max-w-md"
                            id="fileUpload"
                        >
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="file"
                                    value="Upload file"
                                />
                            </div>
                            <FileInput
                                helperText="A Pdf document"
                                id="file"
                                accept='.pdf'
                            />
                        </div>
                        
                        <div className="w-full">
                            <Button>Add file</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}


