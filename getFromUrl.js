/*
§Readystate:

	#0	UNSENT								➤ Client has been created. ('open' not called yet)

	#1	OPENED							➤ Called: 'open'.

	#2	HEADERS_RECEIVED		➤ Called: 'end'. (headers and status are available)

	#3	LOADING							➤ Downloading. (responseText holds partial data)

	#4	DONE									➤The operation is complete.


§HttpStatusCode (0:NSHTTPURLResponse)

	#Informational

		100: Continue
		101: Switching Protocols

	#Successful

	➤	200: OK
		201: Created
		202: Accepted
		203: Non-Authoritative Information
		204: No Content
		205: Reset Content
		206: Partial Content
		207: Multi-Status

	#Redirection

		300: Multiple Choices
		301: Moved Permanently
		302: Found
		303: See Other
	➤	304: Not Modified
		305: Use Proxy
		306: Switch Proxy (Unused)
		307: Temporary Redirect
		308: Permanent Redirect

	#Client-Error

		400: Bad-Request
		401: Unauthorized
		402: Payment-Required
		403: Forbidden
		404: Not-Found
		405: Method-Not-Allowed
		406: Not-Acceptable
		407: Proxy-Authentication-Required
		408: Request-Timeout
		409: Conflict
		410: Gone
		411: Length-Required
		412: Precondition-Failed
		413: Request-Entity-Too-Large
		414: Request-URI-Too-Long
		415: Unsupported-Media-Type
		416: Requested-Range-Not-Satisfiable
		417: Expectation-Failed
		418: I'm-a-teapot
		422: Unprocessable-Entity
		426: Upgrade-Required
		449: Retry-With
		451: Unavailable-For-Legal-Reason

	#Server Error

		500: Internal-Server-Error
		501: Not-Implemented
		502: Bad-Gateway
		503: Service-Unavailable
		504: Gateway-Timeout
		505: HTTP-Version-Not-Supported
		509: Bandwidth-Limit-Exceeded
*/


//
function getFromUrl(x){
 return new Promise(function(resolve,reject){
	const o=new XMLHttpRequest();
	o.open('GET',x,true);
	o.onreadystatechange=function(evt){
	 if(o.readyState===4){
		const s=this.status;
		if(s!==0&&s!==200&&s!==304){
			reject(new Error('Getting:"'+x+'",server respond:'+s));
		}else{
			resolve(evt.target.response);
		};
	 };
	};
	o.send(null);
 });
}
//
//console.dir(getFromUrl(""));

