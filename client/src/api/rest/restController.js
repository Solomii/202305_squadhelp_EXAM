import httpClient from '../interceptor';

export const registerRequest = data => httpClient.post('registration', data);
export const loginRequest = data => httpClient.post('login', data);
export const getUser = () => httpClient.get('user');
export const updateContest = data => httpClient.post('update-contest', data);
export const setNewOffer = data => httpClient.post('set-new-offer', data);
export const setOfferStatus = data => httpClient.post('set-offer-status', data);
export const downloadContestFile = data =>
  httpClient.get(`download-file/${data.fileName}`);
export const payMent = data => httpClient.post('pay', data.formData);
export const changeMark = data => httpClient.post('change-mark', data);
export const getPreviewChat = () => httpClient.get('preview');
export const getDialog = data => httpClient.get('chat', data);
export const dataForContest = data => httpClient.post('data-for-contest', data); 
export const cashOut = data => httpClient.post('cashout', data);
export const updateUser = data => httpClient.post('update-user', data);
export const newMessage = data => httpClient.post('new-message', data);
export const changeChatFavorite = data => httpClient.post('favorite', data);
export const changeChatBlock = data => httpClient.post('black-list', data);
export const getCatalogList = data => httpClient.get('catalogs', data);
export const addChatToCatalog = data => httpClient.post('add-new-chat-to-catalog', data);
export const createCatalog = data => httpClient.post('create-catalog', data);
export const deleteCatalog = data => httpClient.post('delete-catalog', data);
export const removeChatFromCatalog = data =>
  httpClient.post('remove-chat-from-catalog', data); //// work here!!!!
export const changeCatalogName = data => httpClient.put('update-name-catalog', data);
export const getCustomersContests = data =>
  httpClient.post(
    'customers-contests',
    { limit: data.limit, offset: data.offset },
    {
      headers: {
        status: data.contestStatus,
      },
    }
  );

export const getActiveContests = ({
  offset,
  limit,
  typeIndex,
  contestId,
  industry,
  awardSort,
  ownEntries,
}) =>
  httpClient.post('contests', {
    offset,
    limit,
    typeIndex,
    contestId,
    industry,
    awardSort,
    ownEntries,
  });

export const getContestById = data =>
  httpClient.get('contest-by-id', { 
    headers: {
      contestId: data.contestId,
    },
  });
