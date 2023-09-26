import fetchRequest from './fetchRequest';

const emailSubscribeRequest = async (email: string) => {
  try {
    const url = process.env.NEXT_PUBLIC_FOOTER_WEBHOOK_APGV as string;
    const method = 'POST';
    const dataToSend = {
      from: 'simulator web site',
      email,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const mode = 'cors';
    const response = await fetchRequest<any>(url, method, dataToSend, headers, mode);

    if (response.code === 200) {
      return response;
    }
    throw Error(response);
  } catch (error) {
    return error;
  }
};

export default emailSubscribeRequest;
