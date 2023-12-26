import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "./mailer";

export async function POST(req: NextRequest) {

    const formData = await req.formData();
    let phone = formData.get('phone');
    
    // validate
    if(typeof phone === 'string') {
        const regex = /^01(0|1|[6-9])[0-9]{3,4}[0-9]{4}$/;
        phone = phone.replace(/-/g, '');
        
        if(!regex.test(phone)) {
            return NextResponse.json({msg : "올바른 형식의 전화번호를 입력해주세요."}, {status : 400});
        }
    }

    // mailer
    const mailData = {
        from : process.env.MAIL_USER!,
        subject : '[사이트 알림] 보험 문의 상담이 도착했습니다!',
        message : `아래의 전화번호를 가진 고객으로부터 상담이 도착했습니다.<br><strong>${phone}</strong>`
    }

    return sendEmail(mailData).then(() => {
        return NextResponse.json({ msg: '문의 신청이 성공적으로 이루어졌습니다.\n곧 상담사를 통해 연락드리겠습니다!' }, {
            status: 200,
        })
    }).catch((error) => {
        return NextResponse.json({ msg: error.message }, {
            status: 500,
        });
    });

}