import React from "react";

// component
import Poster from "../components/Poster/Poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
	return (
		<>
			<div className="container mx-auto px-4">
				<div className="w-full lg:flex lg:flex-row-reverse">
					<div className="lg:w-3/4">
						<h2 className="text-2xl font-bold mb-4">Plays in Indore</h2>
						<div className="flex flex-wrap ">
							<div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
								<Poster
									src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
									title="`Dum Biryani-15 Oct"
									subtitle="English -> ₹199"
								/>
							</div>
							<div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
								<Poster
									src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
									title="`Dum Biryani-15 Oct"
									subtitle="English -> ₹199"
								/>
							</div>
							<div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
								<Poster
									src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
									title="`Dum Biryani-15 Oct"
									subtitle="English -> ₹199"
								/>
							</div>
							<div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
								<Poster
									src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
									title="`Dum Biryani-15 Oct"
									subtitle="English -> ₹199"
								/>
							</div>
						</div>
					</div>

					<div className="lg:w-3/12 ">
						<h2 className="text-2xl font-bold mb-4">Filters</h2>
						<div>
							<PlaysFilter
								title="Date"
								tags={["Today", "Tomorrow", "This Weekend"]}
							/>
							<PlaysFilter
								title="Language"
								tags={["Tamil", "Telegu", "English"]}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Plays;
