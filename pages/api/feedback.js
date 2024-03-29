import fs from 'fs';
import path from 'path';


function handler(req, res) {
        if (req.method === 'POST') {
	const email =req.body.email;
	const feedbackText =req.body.text;
	
	const newFeedback = {
           id: new Date().toString(),
	   email: email,
	   text: feedbackText

	};

	// store feedback in a file
	const filePath = path.join(process.cwd(), 'data', 'feedback.json');
	const fileData = fs.readFileSync(filePath);
	const data = JSON.parse(fileData);
	data.push(newFeedback);
	fs.writeFileSync(filePath, JSON.stringify(data));
	res.status(201).json({ message:'Success', feedback:newFeedback});
         		
	} else {
		
		res.status(200).json({
		message:'reach out to us by e-mail: explore-collaborate@googlegroups.com'
	})

	}



}

export default handler;

