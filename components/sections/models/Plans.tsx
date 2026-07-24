"use client"
import { Fragment, useState } from "react";
import AnimatedText from "@/lib/gsap/animations/AnimateText";
import Heading from "@/components/ui/Heading";
import { Check, CheckCheck, ChevronDown, X } from "lucide-react";
import aggregator2 from "@/public/images/model/aggregator2.svg";
import banks2 from "@/public/images/model/banks2.svg";
import corporate2 from "@/public/images/model/corporate2.svg";
import Image from "next/image";
export default function Plans() {

    const [selectedModel, setSelectedModel] = useState('corporate');
    const [open, setOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string[]>([]);
    const models = [
        { key: 'corporate', label: 'Corporate', icon: corporate2 },
        { key: 'banks', label: 'Banks', icon: banks2 },
        { key: 'aggregator', label: 'Aggregator', icon: aggregator2 },
    ];

    // value can be: true (all included), false (not included), 'limited', 'optional'
    const dataByModel: Record<
        string,
        {
            capability: string; basic: string | boolean; advance: string | boolean; enterprise: string | boolean, items?: {
                name: string;
                basic: string | boolean;
                advance: string | boolean;
                enterprise: string | boolean;
            }[]
        }[]
    > = {
        corporate: [
            {
                capability: 'Mandate Management', basic: 'limited', advance: true, enterprise: true,
                items: [
                    { name: 'Physical Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'eSign Aadhaar Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'Debit Card Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'Net Banking Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'Aadhaar Online Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'Simplified Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'PAN / Customer ID Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'UPI Intent Mandate', basic: false, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Collections', basic: 'limited', advance: 'limited', enterprise: true,
                items: [
                    { name: 'Collection Processing', basic: true, advance: true, enterprise: true },
                    { name: 'Bulk Collections Upload', basic: true, advance: true, enterprise: true },
                    { name: 'Collection Status Tracking', basic: true, advance: true, enterprise: true },
                    { name: 'Auto Retry Collections', basic: true, advance: true, enterprise: true },
                    { name: 'Auto Reconciliation', basic: true, advance: true, enterprise: true },
                    { name: 'Auto Collection', basic: false, advance: true, enterprise: true },
                    { name: 'SFTP Based Collection', basic: false, advance: false, enterprise: true },
                    { name: 'Auto PDN (SMS)', basic: true, advance: true, enterprise: true },
                    { name: 'Auto UPI Collect Link', basic: false, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Dashboard', basic: 'limited', advance: 'limited', enterprise: true,
                items: [
                    { name: 'Corporate Dashboard', basic: true, advance: true, enterprise: true },
                    { name: 'Collection Analytics', basic: true, advance: true, enterprise: true },
                    { name: 'Success Rate Analytics', basic: true, advance: true, enterprise: true },
                    { name: 'Rejection Analytics', basic: false, advance: false, enterprise: true },
                ],
            },
            {
                capability: 'Android App', basic: false, advance: true, enterprise: true,
                items: [
                    { name: 'Mobility Solution', basic: false, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Corporate Management', basic: 'limited', advance: true, enterprise: true,
                items: [
                    { name: 'Branch Management', basic: true, advance: true, enterprise: true },
                    { name: 'Maker Checker Workflow', basic: false, advance: true, enterprise: true },
                    { name: 'Multi Entity Support', basic: false, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'API Platform', basic: false, advance: false, enterprise: true,
                items: [
                    { name: 'Mandate Registration APIs', basic: false, advance: false, enterprise: true },
                    { name: 'Collection APIs', basic: false, advance: false, enterprise: true },
                    { name: 'Status APIs', basic: false, advance: false, enterprise: true },
                    { name: 'Webhook APIs', basic: false, advance: false, enterprise: true },
                    { name: 'Bulk APIs', basic: false, advance: false, enterprise: true },
                    { name: 'API Gateway', basic: false, advance: false, enterprise: true },
                ],
            },
            {
                capability: 'Validation Services', basic: 'optional', advance: 'optional', enterprise: true,
                items: [
                    { name: 'PAN Validation API', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'Account Validation API', basic: 'optional', advance: true, enterprise: true },
                    { name: 'IFSC Validation API', basic: 'optional', advance: 'optional', enterprise: true },
                ],
            },
            {
                capability: 'Compliance', basic: true, advance: true, enterprise: true,
                items: [
                    { name: 'Audit Trail', basic: true, advance: true, enterprise: true },
                    { name: 'Activity Logging', basic: true, advance: true, enterprise: true },
                    { name: 'Compliance Reports', basic: true, advance: true, enterprise: true },
                    { name: 'Cert IN VAPT Reports', basic: true, advance: true, enterprise: true },
                    { name: 'Data Retention Policies', basic: true, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Notifications', basic: 'limited', advance: 'limited', enterprise: true,
                items: [
                    { name: 'SMS Notifications', basic: true, advance: true, enterprise: true },
                    { name: 'Email Notifications', basic: true, advance: true, enterprise: true },
                    { name: 'Webhook Notifications', basic: false, advance: false, enterprise: true },
                ],
            },
            {
                capability: 'Security', basic: 'limited', advance: 'limited', enterprise: true,
                items: [
                    { name: 'MFA Authentication', basic: true, advance: true, enterprise: true },
                    { name: 'IP Whitelisting', basic: false, advance: false, enterprise: true },
                    { name: 'Encryption & Key Management', basic: true, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Personalization', basic: false, advance: false, enterprise: true,
                items: [
                    { name: 'Whitelabel', basic: false, advance: false, enterprise: true },
                    { name: 'Exclusive Deployment', basic: false, advance: false, enterprise: true },
                    { name: 'Custom Domain', basic: false, advance: false, enterprise: true },
                    { name: 'Infra and Network Segmentation', basic: false, advance: false, enterprise: true },
                    { name: 'DR Dills as per Corporate policy', basic: false, advance: false, enterprise: true },
                ],
            },
            {
                capability: 'Additional Features', basic: 'optional', advance: 'optional', enterprise: true,
                items: [
                    { name: 'Direct Debit', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'NACH Cancellation', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'Amend', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'Suspend/Revoke', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'Billing Report', basic: 'optional', advance: 'optional', enterprise: true },
                ],
            },
        ],
        banks: [
            {
                capability: 'Mandate Management', basic: true, advance: true, enterprise: true,
                items: [
                    { name: 'Physical Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'eSign Aadhaar Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'Debit Card Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'Net Banking Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'Aadhaar Online Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'Simplified Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'PAN / Customer ID Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'UPI Intent Mandate', basic: true, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Collections', basic: 'limited', advance: 'limited', enterprise: true,
                items: [
                    { name: 'Collection Processing', basic: true, advance: true, enterprise: true },
                    { name: 'Bulk Collections Upload', basic: true, advance: true, enterprise: true },
                    { name: 'Collection Status Tracking', basic: true, advance: true, enterprise: true },
                    { name: 'Auto Retry Collections', basic: false, advance: false, enterprise: true },
                    { name: 'Auto Reconciliation', basic: false, advance: false, enterprise: true },
                    { name: 'Auto Collection', basic: true, advance: true, enterprise: true },
                    { name: 'SFTP Based Collection', basic: false, advance: true, enterprise: true },
                    { name: 'Auto PDN (SMS)', basic: false, advance: true, enterprise: true },
                    { name: 'Auto UPI Collect Link', basic: false, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Dashboard', basic: false, advance: 'limited', enterprise: true,
                items: [
                    { name: 'Corporate Dashboard', basic: false, advance: false, enterprise: true },
                    { name: 'Collection Analytics', basic: false, advance: false, enterprise: true },
                    { name: 'Success Rate Analytics', basic: false, advance: false, enterprise: true },
                    { name: 'Rejection Analytics', basic: false, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Android App', basic: false, advance: true, enterprise: true,
                items: [
                    { name: 'Mobility Solution', basic: false, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Corporate Management', basic: true, advance: true, enterprise: true,
                items: [
                    { name: 'Branch Management', basic: true, advance: true, enterprise: true },
                    { name: 'Maker Checker Workflow', basic: true, advance: true, enterprise: true },
                    { name: 'Multi Entity Support', basic: true, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'API Platform', basic: 'limited', advance: 'limited', enterprise: true,
                items: [
                    { name: 'Mandate Registration APIs', basic: true, advance: true, enterprise: true },
                    { name: 'Collection APIs', basic: true, advance: true, enterprise: true },
                    { name: 'Status APIs', basic: true, advance: true, enterprise: true },
                    { name: 'Webhook APIs', basic: true, advance: true, enterprise: true },
                    { name: 'Bulk APIs', basic: true, advance: true, enterprise: true },
                    { name: 'API Gateway', basic: false, advance: false, enterprise: true },
                ],
            },
            {
                capability: 'Validation Services', basic: 'optional', advance: 'optional', enterprise: true,
                items: [
                    { name: 'PAN Validation API', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'Account Validation API', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'IFSC Validation API', basic: 'optional', advance: 'optional', enterprise: true },
                ],
            },
            {
                capability: 'Compliance', basic: true, advance: true, enterprise: true,
                items: [
                    { name: 'Audit Trail', basic: true, advance: true, enterprise: true },
                    { name: 'Activity Logging', basic: true, advance: true, enterprise: true },
                    { name: 'Compliance Reports', basic: true, advance: true, enterprise: true },
                    { name: 'Cert IN VAPT Reports', basic: true, advance: true, enterprise: true },
                    { name: 'Data Retention Policies', basic: true, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Notifications', basic: true, advance: true, enterprise: true,
                items: [
                    { name: 'SMS Notifications', basic: true, advance: true, enterprise: true },
                    { name: 'Email Notifications', basic: true, advance: true, enterprise: true },
                    { name: 'Webhook Notifications', basic: true, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Security', basic: true, advance: true, enterprise: true,
                items: [
                    { name: 'MFA Authentication', basic: true, advance: true, enterprise: true },
                    { name: 'IP Whitelisting', basic: true, advance: true, enterprise: true },
                    { name: 'Encryption & Key Management', basic: true, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Personalization', basic: true, advance: true, enterprise: true,
                items: [
                    { name: 'Whitelabel', basic: true, advance: true, enterprise: true },
                    { name: 'Exclusive Deployment', basic: true, advance: true, enterprise: true },
                    { name: 'Custom Domain', basic: true, advance: true, enterprise: true },
                    { name: 'Infra and Network Segmentation', basic: true, advance: true, enterprise: true },
                    { name: 'DR Dills as per Corporate policy', basic: true, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Additional Features', basic: 'optional', advance: 'optional', enterprise: true,
                items: [
                    { name: 'Direct Debit', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'NACH Cancellation', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'Amend', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'Suspend/Revoke', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'Billing Report', basic: 'optional', advance: 'optional', enterprise: true },
                ],
            },
        ],
        aggregator: [
            {
                capability: 'Mandate Management', basic: true, advance: true, enterprise: true,
                items: [
                    { name: 'Physical Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'eSign Aadhaar Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'Debit Card Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'Net Banking Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'Aadhaar Online Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'Simplified Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'PAN / Customer ID Mandate', basic: true, advance: true, enterprise: true },
                    { name: 'UPI Intent Mandate', basic: true, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Collections', basic: 'limited', advance: 'limited', enterprise: 'limited',
                items: [
                    { name: 'Collection Processing', basic: true, advance: true, enterprise: true },
                    { name: 'Bulk Collections Upload', basic: false, advance: true, enterprise: true },
                    { name: 'Collection Status Tracking', basic: true, advance: true, enterprise: true },
                    { name: 'Auto Retry Collections', basic: true, advance: true, enterprise: true },
                    { name: 'Auto Reconciliation', basic: false, advance: false, enterprise: true },
                    { name: 'Auto Collection', basic: false, advance: true, enterprise: true },
                    { name: 'SFTP Based Collection', basic: false, advance: false, enterprise: false },
                    { name: 'Auto PDN (SMS)', basic: true, advance: true, enterprise: true },
                    { name: 'Auto UPI Collect Link', basic: false, advance: false, enterprise: true },
                ],
            },
            {
                capability: 'Dashboard', basic: 'limited', advance: 'limited', enterprise: true,
                items: [
                    { name: 'Corporate Dashboard', basic: true, advance: true, enterprise: true },
                    { name: 'Collection Analytics', basic: true, advance: true, enterprise: true },
                    { name: 'Success Rate Analytics', basic: true, advance: true, enterprise: true },
                    { name: 'Rejection Analytics', basic: false, advance: false, enterprise: true },
                ],
            },
            {
                capability: 'Android App', basic: false, advance: true, enterprise: true,
                items: [
                    { name: 'Mobility Solution', basic: false, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Corporate Management', basic: false, advance: false, enterprise: true,
                items: [
                    { name: 'Branch Management', basic: false, advance: false, enterprise: true },
                    { name: 'Maker Checker Workflow', basic: false, advance: false, enterprise: true },
                    { name: 'Multi Entity Support', basic: false, advance: false, enterprise: true },
                ],
            },
            {
                capability: 'API Platform', basic: 'limited', advance: 'limited', enterprise: true,
                items: [
                    { name: 'Mandate Registration APIs', basic: true, advance: true, enterprise: true },
                    { name: 'Collection APIs', basic: true, advance: true, enterprise: true },
                    { name: 'Status APIs', basic: true, advance: true, enterprise: true },
                    { name: 'Webhook APIs', basic: true, advance: true, enterprise: true },
                    { name: 'Bulk APIs', basic: true, advance: true, enterprise: true },
                    { name: 'API Gateway', basic: false, advance: false, enterprise: true },
                ],
            },
            {
                capability: 'Validation Services', basic: 'optional', advance: 'optional', enterprise: true,
                items: [
                    { name: 'PAN Validation API', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'Account Validation API', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'IFSC Validation API', basic: 'optional', advance: 'optional', enterprise: true },
                ],
            },
            {
                capability: 'Compliance', basic: true, advance: true, enterprise: true,
                items: [
                    { name: 'Audit Trail', basic: true, advance: true, enterprise: true },
                    { name: 'Activity Logging', basic: true, advance: true, enterprise: true },
                    { name: 'Compliance Reports', basic: true, advance: true, enterprise: true },
                    { name: 'Cert IN VAPT Reports', basic: true, advance: true, enterprise: true },
                    { name: 'Data Retention Policies', basic: true, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Notifications', basic: 'limited', advance: 'limited', enterprise: true,
                items: [
                    { name: 'SMS Notifications', basic: true, advance: true, enterprise: true },
                    { name: 'Email Notifications', basic: true, advance: true, enterprise: true },
                    { name: 'Webhook Notifications', basic: false, advance: false, enterprise: true },
                ],
            },
            {
                capability: 'Security', basic: true, advance: true, enterprise: true,
                items: [
                    { name: 'MFA Authentication', basic: true, advance: true, enterprise: true },
                    { name: 'IP Whitelisting', basic: true, advance: true, enterprise: true },
                    { name: 'Encryption & Key Management', basic: true, advance: true, enterprise: true },
                ],
            },
            {
                capability: 'Personalization', basic: false, advance: false, enterprise: true,
                items: [
                    { name: 'Whitelabel', basic: false, advance: false, enterprise: true },
                    { name: 'Exclusive Deployment', basic: false, advance: false, enterprise: true },
                    { name: 'Custom Domain', basic: false, advance: false, enterprise: true },
                    { name: 'Infra and Network Segmentation', basic: false, advance: false, enterprise: true },
                    { name: 'DR Dills as per Corporate policy', basic: false, advance: false, enterprise: true },
                ],
            },
            {
                capability: 'Additional Features', basic: 'optional', advance: 'optional', enterprise: true,
                items: [
                    { name: 'Direct Debit', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'NACH Cancellation', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'Amend', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'Suspend/Revoke', basic: 'optional', advance: 'optional', enterprise: true },
                    { name: 'Billing Report', basic: 'optional', advance: 'optional', enterprise: true },
                ],
            },
        ],
    };

    function Cell({ value, single }: { value: string | boolean, single?: boolean }) {
        if (value === true) {
            return (
                <span className="inline-flex items-center gap-1 text-[#40A511] text-xs sm:text-sm">
                    {single ? <Check size={19} /> : <CheckCheck size={19} />}
                </span>
            );
        }
        if (value === false) {
            return <X size={17} className="text-[#D01A21]" />;
        }
        if (value === 'limited') {
            return <span className="text-[#67758F] text-xs sm:text-sm leading-[120%] text-start font-normal">Limited</span>;
        }
        if (value === 'optional') {
            return (
                <span className=" bg-[#3535DD1A] text-[#3535DD] px-2 py-1 rounded-[2px] text-xs sm:text-sm leading-[120%] text-start font-normal">
                    Optional
                </span>
            );
        }
        return null;
    }
    const rows = dataByModel[selectedModel] || [];
    const current = models.find((m) => m.key === selectedModel)!;

    return (
        <>
            <section className="prc_md  py-20 px-6 relative" id="plans">
                <div className="container mx-auto">
                    <div className="relative z-2 text-start">
                        <AnimatedText as="p" className="text-blue text-start text-xs sm:text-sm uppercase font-mono font-normal bg-chip inline-block px-4 rounded-2xl py-1 mb-7">Plans</AnimatedText>
                        <Heading as="h3" className="sm:mb-3 mb-5 text-2xl sm:text-4xl xl:text-5xl leading-[110%] text-start font-light font-primary text-heading">What’s included across <br />
                            Models.</Heading>
                        <div className="block">
                            {/* Dropdown "tab" selector */}
                            <div className="flex justify-end">
                                <div className="relative inline-block ">
                                    <button
                                        onClick={() => setOpen(!open)}
                                        role="button"
                                        className="flex items-center gap-2 border border-[#B3B3B3]  rounded-sm px-3 py-2 text-sm font-primary text-[#6B7280] bg-white w-[230px] relative cursor-pointer"
                                    >
                                        <span className="text-gray-500">Models :</span>
                                        <Image src={current.icon} alt={current.label} width={20} height={20} className="text-[#5E5E5E] object-contain" />
                                        {current.label}
                                        <span className="absolute right-3 top-1/2 -translate-y-1/2"><ChevronDown size={16} /></span>
                                    </button>

                                    {open && (
                                        <div className="absolute right-0 mt-1 w-full bg-white border border-[#B3B3B3] rounded-sm shadow-lg z-10">
                                            {models.map((m) => (
                                                <button
                                                    key={m.key}
                                                    onClick={() => {
                                                        setSelectedModel(m.key);
                                                        setOpenDropdown([]);
                                                        setOpen(false);
                                                    }}
                                                    className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm font-primary text-[#6B7280] border-b border-[#B3B3B3] cursor-pointer hover:bg-blue-50 last:border-b-0"
                                                >
                                                    <Image src={m.icon} alt={m.label} width={20} height={20} className="text-[#5E5E5E] object-contain" />
                                                    {m.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto relative ">
                            <table className="w-full mt-6 text-xs sm:text-sm min-w-[300px]">
                                <thead className="sticky top-0 z-2 bg-white w-full">
                                    <tr className="border-b border-[#B3B3B3] text-left text-black/90 font-sans font-semibold  text-xs sm:text-sm leading-[180%]  uppercase tracking-wide">
                                        <th className="py-3 ps-3">Capability</th>
                                        <th className="py-3 ">Basic</th>
                                        <th className="py-3">Advance</th>
                                        <th className="py-3">Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row: any, i: number) => {
                                        return <Fragment key={row.capability}>
                                            <tr key={row.capability} className={`${openDropdown.includes(row.capability) ? "border-t  border-[#B3B3B3] w-full cursor-pointer" : "border-t border-b border-[#B3B3B3] w-full cursor-pointer"} `} onClick={() => setOpenDropdown((prev) => prev.includes(row.capability) ? prev.filter((item) => item !== row.capability) : [...prev, row.capability])}>
                                                <td className="py-4 flex items-center gap-2 text-[#383838] text-sm font-medium font-primary w-[130px] sm:w-[40%]">
                                                    <ChevronDown size={16} className={`${openDropdown.includes(row.capability) ? "rotate-0" : "-rotate-90"} shrink-0 transition-all duration-300 ease-in-out`} />
                                                    {row.capability}
                                                </td>
                                                {!openDropdown.includes(row.capability) && <td className="w-[20%] pe-4"><Cell value={row.basic} /></td>}
                                                {!openDropdown.includes(row.capability) && <td className="w-[20%] pe-4"><Cell value={row.advance} /></td>}
                                                {!openDropdown.includes(row.capability) && <td className="w-[20%] pe-4"><Cell value={row.enterprise} /></td>}
                                            </tr>
                                            {openDropdown.includes(row.capability) && (
                                                row.items?.map((item: any) => (
                                                    <tr key={item.name} className="bg-[#FAFBFC] px-10">
                                                        <td className="py-4 pl-4 sm:w-[40%] w-[120px] sm:pe-0 pe-2 ">{item.name}</td>
                                                        <td className="w-[20%] text-xs sm:text-sm pe-4"><Cell single={true} value={item.basic} /></td>
                                                        <td className="w-[20%] text-xs sm:text-sm pe-4"><Cell single={true} value={item.advance} /></td>
                                                        <td className="w-[20%] text-xs sm:text-sm pe-4"><Cell single={true} value={item.enterprise} /></td>
                                                    </tr>
                                                ))
                                            )}
                                        </Fragment>
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-wrap gap-5 items-start justify-start mt-5">
                            <p className="incl_el flex flex-row gap-2 text-sm text-[#666666]"><CheckCheck className="text-[#40A511]" size={18} /> All Included</p>
                            <p className="excl_el flex flex-row gap-2 text-sm text-[#666666]"><X className="text-[#D01A21]" size={18} /> Not Included</p>
                        </div>

                    </div>

                </div>
            </section>

        </>

    )

}