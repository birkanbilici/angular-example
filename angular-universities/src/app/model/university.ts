export interface University {
    id: number;
    name: string;
}

export interface HipoLabUniversitiesRequest {
    name: string,
    country: string,
}

export interface HipoLabUniversityDetail {
    alpha_two_code: string,
	country: string,
    'state-province': string | null,
	domains: Array<string>, 
	name: string,
	web_pages: Array<string>,
}

/* 
[
	...
	{
	    "alpha_two_code": "TR",
	    "country": "Turkey",
	    "state-province": null,
	    "domains": [
	        "sabanciuniv.edu",
	        "sabanciuniv.edu.tr"
	    ],
	    "name": "Sabanci University",
	    "web_pages": [
	        "http://www.sabanciuniv.edu/",
	        "http://www.sabanciuniv.edu.tr/"
	    ],
	},
	...
] */