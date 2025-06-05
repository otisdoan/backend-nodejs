/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: API User
 *   - name: Admins
 *     description: API Admin
 *   - name: Products
 *     description: API Products
 *  
 * /api/v1/users:
 *   get:
 *     summary: get user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Thành công
 *        
 *   post:
 *     summary: create user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               city:
 *                 type: string
 *     responses:
 *       201:
 *         description: Đã tạo thành công
 *
 * /api/v1/users/{id}:
 *   patch:
 *     summary: update user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: id user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               city:
 *                 type: string
 *     responses:
 *       200:
 *         description: Update successfully
 *   delete:
 *     summary: delete user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: id user
 *     responses:
 *       200:
 *         description: Delete successfully
 */
