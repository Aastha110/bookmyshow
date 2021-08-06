import { Disclosure } from '@headlessui/react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const PlaysFilter = (props) => {
    return (
        <Disclosure >
            {({ open }) => (
                <>
                    <Disclosure.Button className="py-2 flex items-center gap-3">
                        { open ? <FiChevronUp /> : <FiChevronDown />} 
                        <span className={open ? "text-red-600" : "textgray-700"}>
                            {props.title}
                        </span>
                        
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        <div className="flex flex-wrap items-center gap-3">
                            {props.tags.map((tags) => (
                                <>
                                <div className="border-2 border-gray-200 p-2">
                                    <span className="text-red-600">{tags}</span>
                                </div>
                                </>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure>
    )
}

export default PlaysFilter;
