import { ComponentSharedServiceGroup } from "@/__generated__/graphql"
import { cn } from "@/lib/utils"
import { ComponentSharedWithImage } from "@/types"
import { CMS_URL } from "@/types/constants"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

type CollapseWithImageProps = {
	item: ComponentSharedWithImage<ComponentSharedServiceGroup>
	direction: "left" | "right"
}

const CollapseWithImage = ({
	item: { title, serviceContent, image },
	direction = "left",
}: CollapseWithImageProps) => {
	const t = useTranslations("OurServices")
	return (
		<div
			className={cn(
				"flex items-start gap-6",
				direction === "left" ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse",
			)}
		>
			<p className='text-black block font-ibm text-2xl font-semibold leading-[150%] lg:hidden'>
				{title}
			</p>
			<div className='relative h-[225px] w-full lg:h-[450px]'>
				<Image
					src={CMS_URL + image.url}
					alt={image.name}
					fill
					className='rounded-xl object-contain'
				/>
			</div>

			<div className='flex w-full flex-col gap-4 font-ibm lg:gap-8'>
				<p className='text-black hidden text-2xl font-semibold leading-[150%] lg:block'>{title}</p>
				<Accordion
					type='single'
					collapsible
					className='flex w-full flex-col gap-4 font-ibm lg:gap-8'
				>
					{serviceContent.map((_, index) => (
						<AccordionItem
							value={`item-${index}`}
							key={index}
						>
							<AccordionTrigger className='text-black text-start text-lg lg:text-xl'>
								{t(`${title.replace(/ /g, "")}.${index + 1}.header`)}
							</AccordionTrigger>
							<AccordionContent className='text-black'>
								<div
									className='relative [&>li]:leading-[150%] [&>ul]:list-disc [&>ul]:px-5'
									dangerouslySetInnerHTML={{
										__html: t.raw(`${title.replace(/ /g, "")}.${index + 1}.content`),
									}}
								/>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	)
}

export default CollapseWithImage
