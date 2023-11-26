const express = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const hashPass = require('../middlewares/hashPassMiddle');
const userController = require('../controllers/userController');
const contestController = require('../controllers/contestController');
const checkToken = require('../middlewares/checkToken');
const validators = require('../middlewares/validators');
const chatController = require('../controllers/chatController');
const upload = require('../utils/fileUpload');
const router = express.Router();

router.post(
  '/registration',
  validators.validateRegistrationData,
  hashPass,
  userController.registration,
);

router.post(
  '/login',
  validators.validateLogin,
  userController.login,
);

router.post(
  '/data-for-contest', 
  checkToken.checkToken,
  contestController.dataForContest,
);

router.post(
  '/pay',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  upload.uploadContestFiles,
  basicMiddlewares.parseBody,
  validators.validateContestCreation,
  userController.payment,
);

router.post(
  '/customers-contests',
  checkToken.checkToken,
  contestController.getCustomersContests,
);

router.get(
  '/contest-by-id',
  checkToken.checkToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById,
);

router.post(
  '/contests',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  contestController.getContests,
);

router.get(
  '/user',
  checkToken.checkAuth,
);

router.get(
  '/download-file/:fileName',
  checkToken.checkToken,
  contestController.downloadFile,
);

router.post(
  '/update-contest',
  checkToken.checkToken,
  upload.updateContestFile,
  contestController.updateContest,
);

router.post(
  '/set-new-offer',
  checkToken.checkToken,
  upload.uploadLogoFiles,
  basicMiddlewares.canSendOffer,
  contestController.setNewOffer,
);

router.post(
  '/set-offer-status',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomerWhoCreateContest,
  contestController.setOfferStatus,
);

router.post(
  '/change-mark', 
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  userController.changeMark,
);

router.post(
  '/update-user',
  checkToken.checkToken,
  upload.uploadAvatar,
  userController.updateUser,
);

router.post(
  '/cashout',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  userController.cashout,
);

router.post(
  '/new-message',
  checkToken.checkToken,
  chatController.addMessage,
);

router.get(
  '/chat',
  checkToken.checkToken,
  chatController.getChat,
);

router.get(
  '/preview',
  checkToken.checkToken,
  chatController.getPreview,
);

router.post(
  '/black-list',
  checkToken.checkToken,
  chatController.blackList,
);

router.post(
  '/favorite',
  checkToken.checkToken,
  chatController.favoriteChat,
);

router.post(
  '/create-catalog',
  checkToken.checkToken,
  chatController.createCatalog,
);

router.put(
  '/update-name-catalog',
  checkToken.checkToken,
  chatController.updateNameCatalog,
);

router.post(
  '/add-new-chat-to-catalog',
  checkToken.checkToken,
  chatController.addNewChatToCatalog,
);

router.post(
  '/remove-chat-from-catalog',
  checkToken.checkToken,
  chatController.removeChatFromCatalog,
);

router.post(
  '/delete-catalog',
  checkToken.checkToken,
  chatController.deleteCatalog,
);

router.get(
  '/catalogs',
  checkToken.checkToken,
  chatController.getCatalogs,
);

module.exports = router;
